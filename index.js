const { app, BrowserWindow, nativeImage} = require("electron");

function createWindow () {
    const icon = nativeImage.createFromPath(`${app.getAppPath()}/src/assets/images/Logo.png`);

  if (app.dock) {
    app.dock.setIcon(icon);
  }

    const win = new BrowserWindow({width:1000, height:800});

    win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);