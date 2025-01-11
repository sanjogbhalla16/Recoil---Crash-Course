import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from "recoil";
import { todosAtomFamily } from "./SelectorFamilyAtom";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  /*
   {
      contents,
      state: 'hasValue' | 'loading' | 'hasError'
   }
   */
  if (todo.state === "loading") {
    return <div>Loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.id}
        <br></br>
        {todo.contents.todo}
        <br></br>
        {todo.contents.completed === true ? "Completed" : "Not Completed"}
        <br />
      </>
    );
  } else if (todo.state === "hasError") {
    return <div>Error</div>;
  }
}

export default App;
