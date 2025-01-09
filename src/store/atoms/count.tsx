import { atom } from "recoil";
import { selector } from "recoil";

const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export default countAtom;

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0;
  },
});
