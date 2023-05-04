import { createContext, useReducer } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  const initialState = {
    data: "",
    loading: true,
    error: false,
  };

  const contextReducer = (state, action) => {
    switch (action.type) {
      case "informacionrecibida":
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: false,
        };
      case "cargando":
        return {
          ...state,
          data: "",
          loading: true,
          error: false,
        };
      case "clear":
        return {
          ...state,
          data: "",
          loading: true,
          error: false,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(contextReducer, initialState);

  return (
    <Contexto.Provider value={{ state, dispatch }}>
      {children}
    </Contexto.Provider>
  );
};
