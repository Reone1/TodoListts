import * as React from 'react';
import Item from '../ItemComponent/Item'


const List: React.FC = () => {
    return(
        <div>
            <Item title="title" description="discription" flag={false}/>
        </div>
    )
}

export default List;