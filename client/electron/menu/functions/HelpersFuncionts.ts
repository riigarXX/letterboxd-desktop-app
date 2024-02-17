const { ipcMain } = require("electron");

export const doOpenRoutes = () => {
  ipcMain.emit("open-all-routes", "/routes");
};
