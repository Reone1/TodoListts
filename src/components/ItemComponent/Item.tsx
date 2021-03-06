import React, {useState, useEffect} from 'react';

interface ItemProps {
    title : string;
    description: string;
    flag: boolean;
}

const Item:React.FC<ItemProps> = ({title, description, flag}:ItemProps) => {
    const [flagState, setFlagState] = useState<boolean>(flag)

    useEffect(() => {
       console.log('flagChange', flagState) 
    },[flagState])

    return (    
        <div>
        <button onClick={() => setFlagState(!flagState)}>플래그 버튼</button>
          <h2>{title}</h2>  
          <div>{description}</div>
        </div>
    )
}

export default Item;