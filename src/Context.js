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

    const value = {  // Contructs value object passed to Provider
      projectData: this.ProjectData
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