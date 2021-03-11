import React, { Component } from 'react';
import ProjectData from './ProjectData';

const Context = React.createContext();

export class Provider extends Component {
  
  // Sets context data to UserData class imported from UserData.js
  constructor() {
    super();
    this.ProjectData = ProjectData;
  }

  // Passes UserData object to Children of Provider
  render() {

    //Create fade effect on sections on scroll
    const fade = () => {
      let elementsArray = document.querySelectorAll(".fades");
      console.log(elementsArray);
      window.addEventListener('scroll', fadeIn ); 
      function fadeIn() {
          for (var i = 0; i < elementsArray.length; i++) {
              var elem = elementsArray[i]
              var distInView = elem.getBoundingClientRect().top - window.innerHeight + 50;
              if (distInView < 0) {
                  elem.classList.add("inView");
              } else {
                  elem.classList.remove("inView");
              }
          }
      }
      fadeIn();
    }

    const value = {  // Contructs value object passed to Provider
      projectData: this.ProjectData,
      fade: fade
    }
    
    
    

    return(
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return(
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}