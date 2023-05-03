import React, { createContext, useContext, useReducer } from "react";
import { resetApiHeaders } from "../Api/Axios";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startLoading = () => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
  };
  const stopLoading = () => {
    dispatch({
      type: "SET_LOADING",
      loading: false,
    });
  };

  const changeLoginState = (userData, token) => {
    resetApiHeaders(token);
    localStorage.setItem("AUTH_TOKEN", token);
    dispatch({
      type: "SET_USER_DATA",
      userData: userData,
    });
    dispatch({
      type: "SET_LOGIN_STATUS",
      loggedIn: true,
    });
  };

  const logoutFunc = () => {
    resetApiHeaders();
    localStorage.removeItem("AUTH_TOKEN");
    dispatch({
      type: "SET_LOGIN_STATUS",
      loggedIn: false,
    });
  };

  const showSuccess = (message) => {
    dispatch({
      type: "SHOW_ERROR",
      errorMessage: "",
    });
    dispatch({
      type: "SHOW_SUCCESS",
      successMessage: message,
    });

    setTimeout(() => {
      dispatch({
        type: "SHOW_SUCCESS",
        successMessage: "",
      });
    }, 3000);
  };
  const showError = (message) => {
    dispatch({
      type: "SHOW_SUCCESS",
      successMessage: "",
    });
    dispatch({
      type: "SHOW_ERROR",
      errorMessage: message,
    });

    setTimeout(() => {
      dispatch({
        type: "SHOW_ERROR",
        errorMessage: "",
      });
    }, 3000);
  };

  return (
    <DataLayerContext.Provider
      value={{
        state,
        changeLoginState,
        startLoading,
        stopLoading,
        logoutFunc,
        showSuccess,
        showError,
      }}
    >
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
