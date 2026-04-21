# Root Folder Name

A VS Code extension that displays the current workspace root folder name in the status bar.

## Features

- Shows `$(folder) <root-folder-name>` in the left status bar
- Uses the active theme's color (`statusBarItem.prominentForeground`)
- Hides automatically when no workspace is open
- Updates when the workspace changes

## Requirements

- [mise](https://mise.jdx.dev/) for tool management

## Build

Install tools (Node.js + vsce) locally via mise — no global installs needed:

```bash
mise install
```

Package the extension:

```bash
mise run package
```

This produces a `.vsix` file in the project directory.

## Install

In VS Code: `Cmd+Shift+P` → "Extensions: Install from VSIX…" → select the `.vsix` file.

## Customization

To change the status bar color, edit `extension.js` and swap the theme color token:

```js
statusBarItem.color = new vscode.ThemeColor('statusBarItem.prominentForeground');
```

Available tokens:

| Token | Effect |
|---|---|
| `statusBarItem.prominentForeground` | Highlighted/prominent item color |
| `statusBarItem.warningForeground` | Yellow/warning tone |
| `statusBarItem.errorForeground` | Red/error tone |
| `statusBarItem.remoteForeground` | Remote indicator color (often blue/green) |

