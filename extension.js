const vscode = require('vscode');

function activate(context) {
    const commandId = 'font-switcher.changeFont';

    const fonts = [
        'Courier New',
        'Consolas',
        'Arial',
        'monospace',
        'Impact',
        'Georgia'
    ];

    const command = vscode.commands.registerCommand(commandId, async () => {
        const selectedFont = fonts[Math.floor(Math.random() * fonts.length)];

        const fontFamily = [selectedFont, ...fonts.filter((font) => font !== selectedFont)].join(', ');

        const configuration = vscode.workspace.getConfiguration('editor');

        await configuration.update('fontFamily', fontFamily, true);

        vscode.window.showInformationMessage(`Активный шрифт: ${selectedFont}`);
    });

    context.subscriptions.push(command);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
