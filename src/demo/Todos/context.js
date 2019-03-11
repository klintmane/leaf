const states = {
  loading: (loading = true) => ({ loading }),
  success: todos => ({ todos, loading: false, error: false }),
  error: error => ({ loading: false, error })
};

export default ctx => ({
  getTodos: () => {
    if (!ctx.todos && !ctx.loading) {
      ctx.set(states.loading());

      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(todos => ctx.set(states.success(todos)))
        .catch(e => ctx.set(states.error(e)));
    }
  }
});
