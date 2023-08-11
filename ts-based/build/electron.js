const path = require("path");
const Store = require("electron-store");
const { ipcMain } = require("electron");
const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//defined the store
let store = new Store();

// ... rest of code here

//added a listener at the end of file with a log to see what's happening
console.log("store", store.get("test"));

// IPC listener
ipcMain.on("get", async (event, val) => {
  event.returnValue = store.get(val);
});
ipcMain.on("set", async (event, key, val) => {
  store.set(key, val);
});
ipcMain.on("delete", async (event, key, val) => {
  store.delete(key);
});
