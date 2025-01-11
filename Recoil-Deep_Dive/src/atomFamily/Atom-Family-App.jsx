import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atom-family";

function AtomFamilyApp() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todos = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todos.title}
      <br></br>
      {todos.description}
      <br />
    </>
  );
}

export default AtomFamilyApp;
