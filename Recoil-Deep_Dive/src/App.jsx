// import "./App.css";
// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import { jobAtom, networkAtom, NotificationAtom, MessageAtom } from "./atom";

// //Any atom or any hook you want to use need to be wrapped inside the RecoilRoot

// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <MainApp />
//       </RecoilRoot>
//     </div>
//   );
// }

// function MainApp() {
//   const networkCount = useRecoilValue(networkAtom);
//   const jobCount = useRecoilValue(jobAtom);
//   const notificationCount = useRecoilValue(NotificationAtom);
//   const [messagingCount, setMessagingCount] = useRecoilState(MessageAtom);
//   return (
//     <>
//       <button>Home</button>

//       <button>
//         My Network(
//         {networkCount >= 100 ? "99+" : networkCount})
//       </button>
//       <button>Jobs({jobCount})</button>
//       <button>Messaging({messagingCount})</button>
//       <button>Notification({notificationCount})</button>
//       <button
//         onClick={() => {
//           setMessagingCount(messagingCount + 1);
//         }}
//       >
//         Me
//       </button>
//     </>
//   );
// }

// export default App;

//---------------useSetRecoilState------------------
import "./App.css";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { jobAtom, networkAtom, NotificationAtom, MessageAtom } from "./atom";

//Any atom or any hook you want to use need to be wrapped inside the RecoilRoot

function App() {
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobAtom);
  const notificationCount = useRecoilValue(NotificationAtom);
  const messagingCount = useRecoilValue(MessageAtom);
  return (
    <>
      <button>Home</button>

      <button>
        My Network(
        {networkCount >= 100 ? "99+" : networkCount})
      </button>
      <button>Jobs({jobCount})</button>
      <button>Messaging({messagingCount})</button>
      <button>Notification({notificationCount})</button>
      <ButtonUpdater />
    </>
  );
}

function ButtonUpdater() {
  const setMessagingCount = useSetRecoilState(MessageAtom);

  return (
    <button
      onClick={() => {
        setMessagingCount((c) => c + 1);
      }}
    >
      Me
    </button>
  );
}

export default App;
