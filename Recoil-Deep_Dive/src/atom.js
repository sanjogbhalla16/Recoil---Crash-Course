import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});

export const NotificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const MessageAtom = atom({
  key: "messageAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const notificationCount = get(NotificationAtom);
    const messagingCount = get(MessageAtom);
    const networkCount = get(networkAtom);
    const jobCount = get(jobAtom);
    return notificationCount + messagingCount + networkCount + jobCount;
  },
});
