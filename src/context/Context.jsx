import { createContext } from "react";
import main from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSend = async (prompt) => {
    main(prompt);
  };
  onSend("what is react js");
  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
