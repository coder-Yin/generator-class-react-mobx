import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from './index.scss?l';

@inject("<%= store %>")
@observer
export default class <%= name %> extends Component {

    render() {
        const { inputValue } = this.props.<%= store %>;
        return (
            <div>
                component name
            </div>
        );
    }
}
