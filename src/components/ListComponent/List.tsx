import * as React from 'react';
import Item from '../ItemComponent/Item'

type listItem = {
	listItems: Array<item>
}

type item = {
	title: string;
	description: string;
	flag: boolean;
}

const List: React.FC<listItem> = ({listItems}:listItem) => {
    return(
        <div>
         {listItems.map(item => <Item title={item.title} description={item.description} flag={item.flag}/>)}
        </div>
    )
}

export default List;