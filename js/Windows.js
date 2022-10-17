const {BrowserWindow, Menu, Dialog} =require("electron");

createWindowForDepartment = ()=> {
    const forDepartment = new BrowserWindow({
        width: 600,
        height: 800,
        title: "Window For Department",
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModules: true
        }
    });


    forDepartment.loadFile('html/forDepartment.html')

    forDepartment.webContents.openDevTools();
}