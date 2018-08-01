import ko from "knockout";
require('knockout.punches')

class Model {
    appName: KnockoutObservable<string> = ko.observable('Electron + Typescript + VSCode + KnockoutJS')
    readonly process = process

    get versions(): Array<{name: string, value: string}> {
        return Object.keys(this.process.versions).reduce((result, key) => {
            result.push({
                name: key,
                value: this.process.versions[key]
            })
            return result;
        }, [] as Array<{name: string, value: string}>)
    }
}
debugger;
const model = new Model();
ko.punches.enableAll();
window['model'] = model;
ko.applyBindings(model)