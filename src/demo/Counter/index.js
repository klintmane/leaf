import { comp, html } from "~/lib";

import context from "./context";

export const Counter = comp(ctx => {
  const { count, increment } = ctx;
  const { children } = ctx.props;

  return html`
    <div onclick=${increment}>
      <h2>${children}</h2>
      <div>Current count: ${count}</div>
    </div>
  `;
}, context);
