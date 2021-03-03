import * as React from 'react';

interface ItemProps {
    title : string;
    description: string;
}

const Item:React.FC<ItemProps> = ({title, description}:ItemProps) => {
    return (    
        <React.Fragment>
            it's item;
        </React.Fragment>
    )
}