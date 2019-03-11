<div align="center">
  <img src="https://cdn0.iconfinder.com/data/icons/green-world/80/Green_World-14-512.png" alt="seer" width="128px">
</div>

## Overview

_A simplistic and fast JavaScript library for building user interfaces._

**leaf** is yet another library for creating interfaces. It aims to be simplistic to use and as fast as it can be.

## Features

- Fast VDOM, thanks to snabbdom
- No compilation step required, templating features already present in the JavaScript language are used
- Built around a powerful and composable abstraction (context)

## Example

```js
import { comp, html } from "@klintmane/leaf";

const context = ctx => ({
  count: 1,
  increment: () => ctx.set({ count: ctx.count + 1 })
});

const Counter = comp(ctx => {
  const { props, increment, count } = ctx;
  const { children } = props;

  return html`
    <div onclick=${increment}>
      <h2>${children}</h2>
      <div>Current count: ${count}</div>
    </div>
  `;
}, context);
```
