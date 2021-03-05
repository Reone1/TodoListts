import * as React from 'react';

interface WriteProps {
    title : string;
    description: string;
    
}

const Write:React.FC<WriteProps> = ({title, description}:WriteProps) => {
    return (    
        <React.Fragment>
            it's write
        </React.Fragment>
    )
}