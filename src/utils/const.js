import create from "zustand";
import { devtools } from "zustand/middleware";
import {
  sortingArray,
  compareTime,
  swapTime,
  mergeSortAlgo,
} from "./configurations";

export const useData = create(
    devtools((set) => ({
      algorithm: 0,
      sortingArray: sortingArray,
  
      setSortingArray: (array) => set({ sortingArray: array }),
      setAlgorithm: (idx) => set({ algorithm: idx }),
    }))
  );
  

export const useControls = create(
  devtools((set) => ({
    progress: "reset",
    speed: 3,
    compareTime: compareTime,
    swapTime: swapTime,
    doneCount: 0,

    playSort: () => set({ progress: "start" }),
    storeSortProgress: () => set({ progress: "pause" }),
    refreshSort: () => set({ progress: "reset", doneCount: 0 }),
    markSortngDone: () =>
      set((state) => {
        if (useData.getState().algorithm === mergeSortAlgo.length) {
          if (state.doneCount === mergeSortAlgo.length - 1)
            return { doneCount: 0, progress: "done" };
          else return { doneCount: state.doneCount + 1 };
        } else return { progress: "done" };
      }),
    setSwappingSpeed: (speed) =>
      set(() => {
        return { swapTime: 3000 / speed, compareTime: 1500 / speed, speed };
      }),
  }))
);

