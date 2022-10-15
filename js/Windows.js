const {BrowserWindow, Menu, Dialog} =require("electron");
const template =[
    {
        label: "Выбор шаблона отчета",
        submenu: [
            {
                label: "For Department",
            },
            {
                label: "For Company",
                click: async()=>{
                    createWindowForCompany()
                },

            },
            {
                role:"close",
            },
        ],
    }
]


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
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}
createWindowForCompany= ()=>{
    const forCompany = new BrowserWindow({
        width: 600,
        height: 800,
        title: "Window For Company",
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModules: true
        }
    });
    forCompany.loadFile('html/forCompany.html')
    forCompany.webContents.openDevTools()
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}