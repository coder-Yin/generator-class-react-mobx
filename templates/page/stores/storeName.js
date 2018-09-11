import { observable, computed, action, runInAction } from "mobx";

export default class <%= storeUpperCase %> {
    constructor(root) {
        this.root = root;
    }
    // @observable index = 1;
    @observable <%= store %>Value = "";

    @action.bound
    set<%= storeUpperCase %>(value) {
        this.<%= store %>Value = value;
    }

}
