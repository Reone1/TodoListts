import * as React from 'react';

interface ListProps {
    title: string;
    description: string;
}

const List: React.FC<ListProps> = ({title, description}:ListProps) => {
    return(
        <React.Fragment>
            <div>
                it's List
            </div>
        </React.Fragment>
    )
}