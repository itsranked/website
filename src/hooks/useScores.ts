import { useContext } from "react";
import ScoresContext from "src/providers/Scores/context";

export default function useScores() {
  return useContext(ScoresContext);
}
