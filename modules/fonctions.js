  function type_check_v1(variable, type) {
    let equals = typeof(variable) === type;
    if(variable === null && type === "null"){
        return true;
    }else if(variable === null && type === "object"){
        return false;
    }
    else if(Array.isArray(variable) && (type === "array" )){
        return true;
    }else if(Array.isArray(variable) && (type === "object" )){
        return false;
    }else if(equals){
        return equals;
    }else{
        return false;
    }
}

  function type_check_v2(variable, conf) {
    let result = true;
    if('type' in conf){
        result = result && type_check_v1(variable, conf.type);
    }
    if('value' in conf){
        if(type_check_v1(conf.value, 'object')){
            result = result && JSON.stringify(variable) === JSON.stringify(conf.value)
        }else{
            result = result && variable === conf.value
        }
    }
    if('enum' in conf){
        let resultEnum = false;
        for(let val of conf.enum){
            if(type_check_v1(val, 'object')){
                resultEnum = resultEnum || JSON.stringify(val) === JSON.stringify(variable);                
            }else{
                resultEnum = resultEnum || val === variable;
            }
        }
        result = result && resultEnum
    }

    return result;
}
  
  export function type_check(variable, conf) {
    for (let key of Object.keys(conf)) {
      switch (key) {
        case "type":
        case "value":
        case "enum":
          let newConf = {};
          newConf[key] = conf[key];
          if (!type_check_v2(variable, newConf))
            throw new Error("Type properties error");
          break;
        case "properties":
          for (let prop of Object.keys(conf[key])) {
            if (variable[prop] === undefined)
              throw new Error("Type properties error");
            if (!type_check(variable[prop], conf[key][prop]))
              throw new Error("Type properties error");
          }
          break;
      }
    }
  
    return true;
  }
  
  export function prop_access(obj, path) {
    if(path === null || path === ""){
        return obj;
    }
    let tabPaths = path.split('.');
    let out = '';
        for(let i=0;i<tabPaths.length;i++){
            if(obj != null){
                if(tabPaths[i] in obj){
                    out+=tabPaths[i] + '.';
                    obj = obj[tabPaths[i]];
                }
                else{
                    out+=tabPaths[i];
                    console.log(out + ' not exist.');
                    return;
                }
            }else{
                out+=tabPaths[i];
                console.log(out + ' not exist.');
                return;
            }
    }
    return obj;
}