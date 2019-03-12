import { comp, html } from "~/lib";

import init from "./init";

export const Counter = comp(ctx => {
  const { count, increment, name } = ctx;
  const { children } = ctx.props;

  return html`
    <div onclick=${increment}>
      ${name}
      <h2>${children}</h2>
      <div>Current count: ${count}</div>
    </div>
  `;
}, init);
