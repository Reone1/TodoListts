import { ADD_TODO } from './actionType'

type WriteProps = {
    title : string;
    description: string;
    flag:boolean;
}

export const addTodo = (todo:WriteProps) => {
  return { type: ADD_TODO, todo}
}
