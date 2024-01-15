import { useMemo } from "react";
import { createStore, action, persist } from "easy-peasy";

let store;

const initialState = {
  language: { language: "en"},
  token: {token: ""},
  isRemember: {isRemember: false, Email: "", Pwd: ""}
};

const selectLanguage = (state, val) =>{
  state.language = val
}
const languageModel = {
  ...initialState.language,
  setLanguage: action((state, val) => {
    selectLanguage(state, val);
  }),
};

const setToken = (state, val) =>{
  state.token = val
}

const tokenModel = {
  ...initialState.token,
  setUserToken: action((state, val) => {
    setToken(state, val);
  }),
};

const setRemember = (state, val) =>{
  state.isRemember = val.isRemember;
  state.Email = val.Email;
  state.Pwd = val.Pwd;
}

const rememberModel = {
  ...initialState.isRemember,
  setRememberStatus: action((state, val) => {
    setRemember(state, val);
  }),
};

const storeModel = {
  language: languageModel,
  token: tokenModel,
  isRemember: rememberModel
};

function initStore(preloadedState = initialState) {
  return createStore(persist(storeModel), { initialState: preloadedState });
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;
  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
