import { ADD_TODO } from "./actionType"
import { combineReducers } from 'redux'

export type listItem = Array<item>

export type item = {
	title: string;
	description: string;
	flag: boolean;
}

const initialstate:listItem = [
	{
		title: 'no.1 TodoList',
		description:"it's a test description to do list item",
		flag: true,
	},
]

function todos(state = initialstate, action:any) {
	switch (action.type) {
		case ADD_TODO:
			return [
					...state,
					action.todo
				]
		default:
			return state;
	}
}

const todoApp = combineReducers({
  todos
});

export default todoApp
export type RootState = ReturnType<typeof todoApp>;