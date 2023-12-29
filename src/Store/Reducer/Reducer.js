import { Action } from "../Action/Index";

const initialState = {
  navIsOpen: false,
  selectedSidebarItem: "Dashboard",
  isLogged: !!localStorage.getItem("LoggedUser"),
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.NAV_IS_OPEN:
      return {
        ...state,
        navIsOpen: action.payload,
      };

    case Action.TOGGLE_SIDEBAR_ITEM:
      return {
        ...state,
        selectedSidebarItem: action.payload,
      };

    case Action.ISLOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };

    default:
      return state;
  }
};
