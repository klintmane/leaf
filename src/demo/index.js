import { html, mount } from "~/lib";

import { create } from "~/store";

let demo = create("demo");
demo.watch("person.name", console.log);
setTimeout(() => demo.set("person.name.first", "Hell"), 500);

import { Counter } from "./Counter";
import { Users } from "./Users";

mount(
  html`
    <div class="app">
      <${Counter}>I am a counter, click me<//>
      <${Users} />
    </div>
  `,
  document.getElementById("app")
);
