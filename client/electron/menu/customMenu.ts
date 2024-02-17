import { ipcMain } from "electron";
import { doOpenRoutes } from "./functions/HelpersFuncionts";

const { app, Menu } = require("electron");

const isMac = process.platform === "darwin";

const template: Electron.MenuItemConstructorOptions[] = [
  {
    label: "Helpers",
    submenu: [
      {
        label: "Print All routes",
        click: () => {
          doOpenRoutes();
        },
      },
    ],
  },
];

export default template;
