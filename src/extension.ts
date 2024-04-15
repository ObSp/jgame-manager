// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const print = console.log;
	const window = vscode.window;


	let updateCommand = vscode.commands.registerCommand('jgame-manager.updateJGame', () => {
		vscode.window.showInformationMessage('Hello World from JGame Manager!');
	});

	let initCommand = vscode.commands.registerCommand('jgame-manager.init', async () => {
		const syncPath = await window.showInputBox({
			title: "The source folder of JGame to sync with",
			placeHolder: 'The source folder of JGame to sync with',
		});


		const installToPath = await window.showInputBox({
			title: "The path to install JGame to",
			value: __dirname,
			placeHolder: 'The path to install JGame to',
		});

		vscode.workspace.updateWorkspaceFolders(0,
			undefined,
			{
				name: ".jgame-manager",
				uri: vscode.Uri.parse("my:uri", true),
			}
		);

		print(syncPath, installToPath);

		
	});

	context.subscriptions.push(updateCommand, initCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
