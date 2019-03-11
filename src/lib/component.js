import { patch } from "./vdom";

export const comp = (fn, state = {}) => props => {
  const ctx = {};

  const ctxProxy = new Proxy(ctx, {
    get: (obj, prop) => obj[prop] || obj.__state[prop],
    set: () => (
      console.warn(
        "Manually updating context values is not allowed. Use the ctx.set method instead"
      ),
      true
    )
  });

  ctx.props = props;
  ctx.__state = typeof state === "function" ? state(ctxProxy) : state;

  ctx.set = (...args) => {
    const [key, val] = args;
    ctx.__state =
      args.length > 1
        ? { ...ctx.__state, [key]: val } // Update by key
        : { ...ctx.__state, ...key }; // or update with object

    const prevNode = ctx.node;
    ctx.node = fn(ctxProxy);
    prevNode && patch(prevNode, ctx.node);
  };

  ctx.node = fn(ctxProxy);

  return ctx;
};
