import * as React from 'react';

interface ListProps {
    title: string;
    description: string;
    submit: any;
    order: any;
}

const List: React.FC<ListProps> = ({title, description}:ListProps) => {
    let submit = () => {

    }
    return(
        <div onClick={submit}>
            it's List
        </div>
    )
}