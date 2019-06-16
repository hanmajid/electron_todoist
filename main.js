const { app, BrowserWindow } = require("electron");

let win;

const main = () => {
  win = new BrowserWindow({
    width: 400,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", main);

app.on("window-all-closed", () => {
  app.quit();
})