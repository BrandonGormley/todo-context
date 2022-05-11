import { createContext, useContext, useReducer } from 'react';
import { reducer } from './Reducer';

const DEFAULT_DATA = {
  tasks: [],
  isMessage: false,
  message: '',
  messageStyles: '',
};

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_DATA);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Context);
};

export default ContextProvider;
