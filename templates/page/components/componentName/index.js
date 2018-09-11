import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from './index.scss?l';

@inject("<%= store %>Store")
@observer
export default class <%= storeUpperCase %> extends Component {

    getNotice() {
        let { <%= store %>Value } = this.props.<%= store %>Store;
    }

    render() {
        const { <%= store %>Value } = this.props.<%= store %>Store;
        return (
            <div>
                Hello world.
            </div>
        );
    }
}
