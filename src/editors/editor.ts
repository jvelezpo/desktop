import fs from "fs";
import util from "util";

const stat = util.promisify(fs.stat);

export default abstract class Editor implements EditorInterface {
  abstract name: string;

  abstract icon: string;

  get key(): string {
    return this.name.replace(/\s/g, "").toLowerCase();
  }

  public async isDirectory(directory: string): Promise<boolean> {
    const stats = await stat(directory);
    return stats.isDirectory();
  }

  public isDirectorySync(directory: string): boolean {
    try {
      const stats = fs.statSync(directory);
      return stats.isDirectory();
    } catch (err) {
      return false;
    }
  }

  public async isFile(path: string): Promise<boolean> {
    const stats = await stat(path);
    return stats.isFile();
  }

  abstract isEditorInstalled(): Promise<boolean>;

  abstract isPluginInstalled(): Promise<boolean>;

  abstract installPlugin(): Promise<void>;

  abstract uninstallPlugin(): Promise<void>;
}

declare interface EditorInterface {
  key: string;
  name: string;
  icon: string;

  isEditorInstalled(): Promise<boolean>;
  isPluginInstalled(): Promise<boolean>;
  installPlugin(): Promise<void>;
  uninstallPlugin(): Promise<void>;
}
