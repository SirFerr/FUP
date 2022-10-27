const {app, BrowserWindow} = require("electron")

// const { fork } = require('child_process')
// const ps = fork(`${__dirname}/server.js`)

function createWindowForDepartment() {
    const forDepartment = new BrowserWindow({
        width: 600,
        height: 800,
        title: "FUP",
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModules: true
        },

    });

    forDepartment.loadFile('html/forDepartment.html')

    forDepartment.webContents.openDevTools();
}
function createSubmitWindow (){
        const submit = new BrowserWindow({
            width: 600,
            height: 400,
            title: "Submit window",
            resizable: true,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModules: true
            }
        })
        submit.loadFile('html/submitWindow.html')
    }
app.whenReady().then(createWindowForDepartment)

app.on("window-all-closed", ()=>{
    if(process.platform!="darwin"){
        app.quit()
    }
})
app.on('activate',()=>{
    if(BrowserWindow.getAllWindows() === 0){
        createWindowForDepartment()
    }
})
