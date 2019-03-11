import { comp, html } from "~/lib";

export const Todo = comp(ctx => {
  const { props } = ctx;
  const { title } = props;

  return html`
    <li class="app-todo">${title}</li>
  `;
});
