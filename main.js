const { app, BrowserWindow } = require("electron");

let win;

const main = () => {
  win = new BrowserWindow({
    width: 683,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
    show: false,
  });
  win.setMenu(null);
  win.once("ready-to-show", () => {
    win.show();
  })

  win.loadFile("index.html");
  
  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", main);

app.on("window-all-closed", () => {
  app.quit();
})