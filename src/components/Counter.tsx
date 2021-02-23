import * as React from "react";

interface CounterProps {
  name: string;
};

const Counter: React.FC<CounterProps>  = ({name} : CounterProps) => {
  const [count, setCount] = React.useState<number>(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <React.Fragment>
      <h1 onClick={increase}>{name} counter</h1>
      <div>count value: {count}</div>
    </React.Fragment>
  );
}

export default Counter;
