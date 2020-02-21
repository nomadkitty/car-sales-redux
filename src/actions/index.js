export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const BUY_ITEM = "BUY_ITEM";

export const removeFeature = item => {
  // dispatch an action here to remove an item
  return { type: "REMOVE_FEATURE", payload: item };
};

export const buyItem = item => {
  // dipsatch an action here to add an item
  return { type: "BUY_ITEM", payload: item };
};
