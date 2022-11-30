const {app, BrowserWindow, globalShortcut} = require("electron")
var kill  = require('tree-kill');
const os = require('os')
var mainWindow = null
app.on('ready', function () {
    mainWindow  = new BrowserWindow({
        width: 600,
        height: 800,
        title: "FUP",
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModules: true
        },
    });
    console.log()
    const jarPath = app.getAppPath()+"/jar/UniversityProject.jar" ;
    const child = require('child_process').exec('java -jar '+ jarPath)

    let platform = os.platform()
    mainWindow.loadFile('html/index.html')
    if (platform === 'darwin') {
        globalShortcut.register('Command+Option+I', () => {
            mainWindow.webContents.openDevTools()
        })
    } else if (platform === 'linux' || platform === 'win32') {
        globalShortcut.register('Control+Shift+I', () => {
            mainWindow.webContents.openDevTools()
        })
    }
    mainWindow.once('ready-to-show', () => {
        mainWindow.setMenu(null)
        mainWindow.show()
    })

    mainWindow.onbeforeunload = (e) => {
        // Prevent Command-R from unloading the window contents.
        e.returnValue = false
    }

    mainWindow.on('closed', function () {
        kill(child.pid);
        mainWindow = null
    })
})
