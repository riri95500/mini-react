export class Component {
    constructor(props) {
        this.state = {};
        // état précédent du state
        this.prevState;
        this.props = props;
        // rendu précédent
        this.prevRender = null;
    }
  
    //Fonction fléchée pour que this soit lié à l'instance 
    display = () => {
      //Si newprops update
      if (this.shouldUpdate()){
        this.prevRender = this.render();
      }
      return this.prevRender;
    };
  
    setState = (newState) => {
      this.prevState = this.state;
      this.state = newState;
      this.display();
      this.componentDidUpdate();
    };
  
    // Méthode vide qui sera redéfinie dans les classes dérivées pour adapter le comportement lors d'une maj
    componentDidUpdate = () => {};
  
    getState = () => {
      return this.state;
    };
  
    shouldUpdate = () => {
        if (JSON.stringify(this.state) !== JSON.stringify(this.prevState)) {
            return true;
        } else {
            return false;
        }    
    };
  }