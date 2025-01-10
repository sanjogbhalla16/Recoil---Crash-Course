import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobAtom,
  networkAtom,
  NotificationAtom,
  MessageAtom,
  totalNotificationSelector,
} from "./atom";

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
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  //console.log("Total Notification Count:", totalNotificationCount);

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
      {/* <button
        onClick={() => {
          setMessagingCount(messagingCount + 1);
        }}
      >
        Me
      </button> */}
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;

//---------------useSetRecoilState------------------
// import "./App.css";
// import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
// import { jobAtom, networkAtom, NotificationAtom, MessageAtom } from "./atom";
// import { useMemo } from "react";

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
//   const messagingCount = useRecoilValue(MessageAtom);
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   //if one of the values changes and we need to add the above values ?
//   //if one of the values changes we don't need to rerender the whole component shrif the one with above values
//   // const totalNotification = useMemo(() => {
//   //   return notificationCount + messagingCount + networkCount + jobCount;
//   // }, [notificationCount, messagingCount, networkCount, jobCount]);
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
//       <ButtonUpdater />
//     </>
//   );
// }

// function ButtonUpdater() {
//   const setMessagingCount = useSetRecoilState(MessageAtom);

//   return (
//     <button
//       onClick={() => {
//         setMessagingCount((c) => c + 1);
//       }}
//     >
//       Me
//     </button>
//   );
// }

// export default App;
