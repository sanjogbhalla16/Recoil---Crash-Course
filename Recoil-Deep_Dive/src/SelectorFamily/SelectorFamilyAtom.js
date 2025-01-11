import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: "AtomSelectorFamily",
  default: selectorFamily({
    key: "SelectorsFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(`https://dummyjson.com/todos/${id}`);
        console.log(res.data);
        return res.data;
      },
  }),
});

// export const todosAtomFamily = atomFamily({
//   key: "AtomSelectorFamily",
//   default: selectorFamily({
//     key: "SelectorsFamily",

//     get: function (id) {
//       return async function ({ get }) {
//         const res = await axios.get(`https://dummyjson.com/todos/${id}`);
//         console.log(res.data);
//         return res.data;
//       };
//     },
//   }),
// });
