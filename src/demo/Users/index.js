import { comp, html } from "~/lib";

import { User } from "./User";
import init from "./init";

export const Users = comp(ctx => {
  const { data, getUsers } = ctx;

  getUsers();

  return html`
    <ul class="app-users">
      ${data &&
        data.map(
          user =>
            html`
              <${User}
                key=${user.id}
                name=${user.firstName + " " + user.lastName}
              />
            `
        )}
    </ul>
  `;
}, init);
