import { html, mount } from "~/lib";
import { Counter } from "./Counter";
import { Todos } from "./Todos";

mount(
  html`
    <div class="app">
      <${Counter}>I am a counter, click me<//>
      <${Todos} />
    </div>
  `,
  document.getElementById("app")
);
