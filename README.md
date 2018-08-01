## Overview
A start point for developing Electron apps with Typescript (and KnockoutJS, optionally)
> See the **scripts** section of **package.json** for a list of useful commands

## VSCode launching and debugging config

- Install [VSCode Debugger for Electron](https://marketplace.visualstudio.com/items?itemName=kodetech.electron-debug)
```ext install kodetech.electron-debug```
- .vscode/launch.json sample
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "electron",
            "request": "launch",
            "name": "Launch Electron",
            "sourceMaps": true,
            "cwd": "${workspaceFolder}",
            "appDir": "src"
        }
    ]
}
```

## References

 - [Electron](https://electronjs.org/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Node.js](https://nodejs.org)
 - [Knockout JS](http://knockoutjs.com/)
 - [Knockout.Punches](https://mbest.github.io/knockout.punches/)
 - [VSCode Debugger for Electron](https://marketplace.visualstudio.com/items?itemName=kodetech.electron-debug)