import { atom, selector } from "recoil";
import axios from "axios";
export const notifications = atom({
  key: "newnetworkAtom",
  // default: {
  //   network: 4,
  //   jobs: 6,
  //   messaging: 3,
  //   notifications: 3,
  // },
  default: selector({
    key: "newnetworkSelector",
    get: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000)); //sleep for 5 sec
      const response = await axios.get(
        "https://practic-repo.onrender.com/notifications"
      );
      return response.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "newtotalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
