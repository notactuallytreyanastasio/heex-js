# heex-js

HEEx template parser for JavaScript/TypeScript. Parse Phoenix LiveView templates in Node.js or the browser.

## Installation

Download from [GitHub Releases](https://github.com/notactuallytreyanastasio/heex-js/releases):

```bash
# Download the latest release
curl -LO https://github.com/notactuallytreyanastasio/heex-js/releases/latest/download/heex-js.tar.gz
tar -xzf heex-js.tar.gz
```

## Usage

```javascript
import { parse, renderHtml, renderJson, renderDebug } from '@httpeex/heex';

// Parse a HEEx template
const doc = parse(`
  <div class={@class}>
    <.button variant="primary">
      Click me
    </.button>
  </div>
`);

// Render back to HTML
console.log(renderHtml(doc));

// Get JSON AST for tooling
console.log(renderJson(doc));

// Debug tree view
console.log(renderDebug(doc));
```

## API

### `parse(template: string): Document`

Parses a HEEx template string and returns an AST.

### `renderHtml(doc: Document): string`

Renders the AST back to an HTML string.

### `renderJson(doc: Document): string`

Renders the AST as a JSON string (useful for tooling).

### `renderDebug(doc: Document): string`

Renders a debug tree view of the AST.

## Supported Syntax

- HTML elements and attributes
- Self-closing elements (`<br />`, `<input>`)
- Phoenix components (`.button`, `MyApp.Button`)
- Slots (`:header`, `:footer`)
- Expressions (`{@value}`, `{@user.name}`)
- Dynamic attributes (`class={@class}`)
- Spread attributes (`{@rest}`)
- Special attributes (`:if`, `:for`, `:let`)
- EEx tags (`<%= %>`, `<% %>`, `<%# %>`)
- HTML comments (`<!-- -->`)

## TypeScript

Full TypeScript definitions are included.

```typescript
import { parse, Document, Element, Component } from '@httpeex/heex';

const doc: Document = parse('<div></div>');
```

## Requirements

- Node.js 18+ or modern browser

## Source

Generated from [httpeex](https://github.com/notactuallytreyanastasio/httpeex) using [Temper](https://temperlang.dev).

## License

MIT
