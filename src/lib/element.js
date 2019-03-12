import h from "snabbdom/h";
import { computeAttrs } from "./attributes";

export const createComponent = (comp, attrs, children) =>
  comp({
    ...attrs,
    children
  });

export const createElement = (tag, attrs, ...children) => {
  // If the tag references a function, it is a component
  if (typeof tag === "function") {
    return createComponent(tag, attrs || {}, children.flat());
  }
  // Otherwise it is a simple element
  return h(tag, computeAttrs(attrs || {}), children.flat());
};
