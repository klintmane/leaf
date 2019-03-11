export default ctx => ({
  count: 1,
  increment: () => ctx.set("count", ctx.count + 1)
});
