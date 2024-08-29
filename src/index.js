const {app, BrowserWindow } = require("electron");

function createWindow(){
    const window = new BrowserWindow({
        width: 1000,
        height: 750,
        resizable: false
    })
    window.menuBarVisible = false
    window.setTitle('Leaderboard')
    window.loadFile('src/index.html')
}
app.whenReady().then(() => createWindow())
app.on('window-all-closed',() => app.quit())
