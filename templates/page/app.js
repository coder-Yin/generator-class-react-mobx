import React from "react";
import { render } from "react-dom";
import Container from "./components/container";
import Store from "./stores";
import { Provider } from "mobx-react";

const App = () => (
    <Provider {...new Store()}>
        <Container />
    </Provider>
);

render(<App />, document.getElementById("root"));
