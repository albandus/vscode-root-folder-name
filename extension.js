const vscode = require('vscode');

function getRootFolderName() {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders || folders.length === 0) return null;
  return folders[0].name;
}

function activate(context) {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100
  );
  statusBarItem.color = new vscode.ThemeColor('statusBarItem.prominentForeground');

  function update() {
    const name = getRootFolderName();
    if (name) {
      statusBarItem.text = `$(folder) ${name}`;
      statusBarItem.show();
    } else {
      statusBarItem.hide();
    }
  }

  update();

  context.subscriptions.push(
    statusBarItem,
    vscode.workspace.onDidChangeWorkspaceFolders(update)
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
