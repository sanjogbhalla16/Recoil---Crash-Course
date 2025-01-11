import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { notifications, totalNotificationSelector } from "./Async-atom";
import { useEffect } from "react";
import axios from "axios";

function AsyncApp() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useEffect(() => {
  //   // fetch
  //   axios.get("https://practic-repo.onrender.com/notifications").then((res) => {
  //     setNetworkCount(res.data);
  //   });
  // }, []);

  return (
    <>
      <button>Home</button>

      <button>
        My network ({networkCount.network >= 100 ? "99+" : networkCount.network}
        )
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default AsyncApp;
