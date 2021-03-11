import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'
import todoApp from '../reducers/TodoList'

let store = createStore(todoApp)
// TODO: storage connection
// import Counter from "./components/Counter";
import MainContainer from "./containers/MainContainer";

ReactDOM.render(<MainContainer />, document.getElementById("app"));
