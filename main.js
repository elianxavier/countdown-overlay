const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;

ipcMain.on("window-move", (event, { x, y }) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const [winX, winY] = win.getPosition();
  win.setPosition(winX + x, winY + y);
});

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 170,
    height: 60,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    hasShadow: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("index.html");
});
