import { ipcRenderer } from "electron";

export const changeOSTheme = async () => {
  return await ipcRenderer.invoke("dark-mode");
};
