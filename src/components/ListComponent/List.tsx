import * as React from 'react';

interface ListProps {
    title: string;
    description: string;
    order: any;
}

const List: React.FC<ListProps> = ({title, description}:ListProps) => {
    let submit:any = () => {

    }
    return(
        <div onClick={submit}>
            it's List
        </div>
    )
}

export default List;