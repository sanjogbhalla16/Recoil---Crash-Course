import React, { useState } from "react";

const Prop: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Count count={count} />
      <Button count={count} setCount={setCount} />
    </div>
  );
};

//we cannot directly add the arguments in the function in typescript we need to define it
type CountProps = {
  count: number;
};

const Count: React.FC<CountProps> = ({ count }) => {
  return <div>{count}</div>;
};

type ButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const Button: React.FC<ButtonProps> = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Prop;
