import { comp, html } from "~/lib";

import { Todo } from "./Todo";
import context from "./context";

export const Todos = comp(ctx => {
  const { todos, getTodos } = ctx;

  getTodos();

  return html`
    <ul class="app-todos">
      ${todos &&
        todos.map(
          todo =>
            html`
              <${Todo} key=${todo.id} title=${todo.title} />
            `
        )}
    </ul>
  `;
}, context);
