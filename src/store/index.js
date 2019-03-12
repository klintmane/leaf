import { set, contains, parsePath } from "./utils";

const _stores = {};
const _watchers = {};

window._stores = _stores;
window._watchers = _watchers;

export const watch = (name, path, watcher) =>
  _stores[name] && _watchers[name].push([path, watcher]);

export const create = (name, initial = {}) => {
  _stores[name] = initial;
  _watchers[name] = [];

  const store = _stores[name];
  const watchers = _watchers[name];

  store.watch = (path, watcher) => watchers.push([path, watcher]);

  store.set = (path, val) => {
    watchers.forEach(
      ([watched, watcher]) =>
        contains(parsePath(path), parsePath(watched)) && watcher(val)
    );
    return set(store, path, val);
  };

  return store;
};
