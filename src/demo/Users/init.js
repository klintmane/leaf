const states = {
  loading: (loading = true) => ({ loading }),
  success: data => ({ data, loading: false, error: false }),
  error: error => ({ loading: false, error })
};

export default ctx => ({
  getUsers: () => {
    if (!ctx.users && !ctx.loading) {
      ctx.set(states.loading());

      fetch("https://rem-rest-api.herokuapp.com/api/users?limit=5")
        .then(res => res.json())
        .then(users => ctx.set(states.success(users.data)))
        .catch(e => ctx.set(states.error(e)));
    }
  }
});
