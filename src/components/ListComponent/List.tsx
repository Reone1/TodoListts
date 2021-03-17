import * as React from 'react';
import { useSelector } from 'react-redux';
import {RootState} from '../../../reducers/todoList'
import Item from '../ItemComponent/Item'

const List: React.FC = () => {
	let items = useSelector((todos:RootState) => todos.todos)
    return(
			<div>
				{items.map((item,i) => <Item key={i} {...item}/>)}
			</div>
    )
}

export default List;