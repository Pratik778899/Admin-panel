export const Action = {
  NAV_IS_OPEN: "NAV_IS_OPEN",
  TOGGLE_SIDEBAR_ITEM: "TOGGLE_SIDEBAR_ITEM",
  ISLOGGED: "ISLOGGED",
};

export const navOpen = isOpen => {
  // console.log(Action.NAV_IS_OPEN);
  return {
    type: Action.NAV_IS_OPEN,
    payload: isOpen,
  };
};

export const toggleSidebarItem = item => {
  return {
    type: Action.TOGGLE_SIDEBAR_ITEM,
    payload: item,
  };
};

export const isLogged = logged => {
  return {
    type: Action.ISLOGGED,
    payload: logged,
  };
};
