import { createContext, useContext } from "react";

export const RotationContext = createContext({
  current: 1,
  total: 1,
  durationMs: 5000,
  paused: false,
  togglePause: () => {},
});

export function useRotation() {
  return useContext(RotationContext);
}
