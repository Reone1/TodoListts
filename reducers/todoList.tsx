import { ADD_TODO } from "./actionType"
import { combineReducers } from 'redux'

type listItem = {
	listItems: Array<item>
}

type item = {
	title: string;
	description: string;
	flag: boolean;
}

const initialstate:listItem = {
	listItems:[{
		title: 'no.1 TodoList',
		description:"it's a test description to do list item",
		flag: true,
	}],
}

function todos(state = initialstate, action:any) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state.listItems,
				{
					title: action.title,
					description: action.description,
					flag: action.flag,
				}
			]
		default:
			return state;
	}
}

const todoApp = combineReducers({
  todos
});

export default todoApp