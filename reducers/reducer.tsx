import { ADD_TODO } from './actionType'

export const addTodo = (text:string) => {
  return { type: ADD_TODO, text }
}
