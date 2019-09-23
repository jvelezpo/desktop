import Atom from "./editors/atom";
import Chrome from "./editors/chrome";
import Eclipse from "./editors/eclipse";
import SublimeText2 from "./editors/sublime-text-2";
import SublimeText3 from "./editors/sublime-text-3";
import Vim from "./editors/vim";
import VSCode from "./editors/vscode";
import AndroidStudio from "./editors/android-studio";

export default class EditorManager {
  editors: Object;

  constructor() {
    this.editors = {
      Atom: new Atom(),
      Chrome: new Chrome(),
      Eclipse: new Eclipse(),
      AndroidStudio: new AndroidStudio(),
      SublimeText2: new SublimeText2(),
      SublimeText3: new SublimeText3(),
      Vim: new Vim(),
      VSCode: new VSCode()
    };
  }

  public async installedEditors(): Promise<string[]> {
    // const result = [];
    // for (const editor in this.editors) {
    //   result.push(
    //     `${editor} installed ${await this.editors[editor].isEditorInstalled()}`
    //   );
    // }
    // return result;
    return await Promise.all(Object.keys(this.editors).map(async (editor) => `${editor} installed ${await this.editors[editor].isEditorInstalled()}`));
  }
}
