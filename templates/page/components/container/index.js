import React, { Component } from "react";
import <%= storeUpperCase %> from "../componentName/";
import DevTools from "mobx-react-devtools";

export default class Container extends Component {
    render() {
        return (
            <div>
                <<%= storeUpperCase %>  />
                <DevTools />
            </div>
        );
    }
}
