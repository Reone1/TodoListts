import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from '../reducers/todoList'


let store = createStore(todoApp)
// TODO: storage connection
// import Counter from "./components/Counter";
import MainContainer from "./containers/MainContainer";
const App = document.querySelector('#app')


ReactDOM.render(
    <Provider store={store}>
        <MainContainer />
    </Provider>
    , App);
