// import React, { useContext, useState } from "react";
// import { CountContext } from "./context";

// //this has setCount
// //wrap to anyone who wants to use the teleported value inside a provider
// const Prop: React.FC = () => {
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count setCount={setCount} />
//       </CountContext.Provider>
//     </div>
//   );
// };

// //we cannot directly add the arguments in the function in typescript we need to define it
// //this has to pass setCount to buttons
// type CountProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>;
// };

// //this does not pass the count to give it to CountRenderer
// const Count: React.FC<CountProps> = ({ setCount }) => {
//   console.log("re-renders");

//   return (
//     <div>
//       <CountRenderer />
//       <Button setCount={setCount} />
//     </div>
//   );
// };

// //now we have the access of the count value inside the component without passing it through Count component
// const CountRenderer: React.FC = () => {
//   const count = useContext(CountContext);
//   return <div>{count}</div>;
// };

// type ButtonProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>;
// };

// //This need setCount
// const Button: React.FC<ButtonProps> = ({ setCount }) => {
//   const count = useContext(CountContext);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };

// export default Prop;

//--------------------FOR RECOIL---------------------------
import React from "react";
import countAtom, { evenSelector } from "./store/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

//this has setCount
//wrap to anyone who wants to use the teleported value inside a provider
const Prop: React.FC = () => {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};

//we cannot directly add the arguments in the function in typescript we need to define it
//this has to pass setCount to buttons

//this does not pass the count to give it to CountRenderer
const Count: React.FC = () => {
  console.log("re-renders");
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
};

//now we have the access of the count value inside the component without passing it through Count component
const CountRenderer: React.FC = () => {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCountRenderer />
    </div>
  );
};

const EvenCountRenderer: React.FC = () => {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "is Even" : null}</div>;
};

//This need setCount
const Button: React.FC = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Prop;
