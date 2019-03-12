import { watch } from "~/store";

export default ctx => {
  watch("demo", "person.name", name => ctx.set({ name }));
  return {
    hooks: { update: () => console.log("Yay") },
    count: 1,
    increment: () => ctx.set("count", ctx.count + 1)
  };
};
