import { comp, html } from "~/lib";

export const User = comp(ctx => {
  const { props } = ctx;
  const { name } = props;

  return html`
    <li>${name}</li>
  `;
});
