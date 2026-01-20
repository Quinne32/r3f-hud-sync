import { create } from "zustand";

export const useSceneStore = create((set) => ({
  selectedObject: null,
  interactionLog: [],

  selectObject: (name) =>
    set((state) => ({
      selectedObject: name,
      interactionLog: [...state.interactionLog, name].slice(-5),
    })),

  resetScene: () =>
    set({
      selectedObject: null,
      interactionLog: [],
    }),
}));
