import React, { useState } from "react";

//this has setCount
const Prop: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
};

//we cannot directly add the arguments in the function in typescript we need to define it
//this has to pass setCount to buttons
type CountProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Count: React.FC<CountProps> = ({ count, setCount }) => {
  return (
    <div>
      {count}
      <Button count={count} setCount={setCount} />
    </div>
  );
};

type ButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

//This need setCount
const Button: React.FC<ButtonProps> = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Prop;
