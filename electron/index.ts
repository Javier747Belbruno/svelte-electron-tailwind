const { app, BrowserWindow } = require("electron");
const { join } = require("path");

app.whenReady().then(main);

function main() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });

  win.loadFile(join(__dirname, "../public/index.html"));
  win.once("ready-to-show", () => {
    win.show();
  });
}
