// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const ipc = require('electron').ipcMain

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

let mainWindow
let loginWindow
let adminWindow
let showCollegeWindow
let insertWindow
let updateWindow
let detailsWindow
let feedbackWindow

function createInsertWindow() {
    // Create the browser window.
    insertWindow = new BrowserWindow({
        width: 600,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        parent: adminWindow,
        modal: true,
    })

    // and load the index.html of the app.
    insertWindow.loadFile('src/insert.html')

    insertWindow.setMenuBarVisibility(false)

    // Open the DevTools.
    // insertWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    insertWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        insertWindow = null
    })
}


function createUpdateWindow(currentId) {
    // Create the browser window.
    updateWindow = new BrowserWindow({
        width: 600,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        parent: adminWindow,
        modal: true,
    })

    // and load the index.html of the app.
    updateWindow.loadFile('src/update.html')

    updateWindow.setMenuBarVisibility(false)

    // Open the DevTools.
    // updateWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    updateWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        updateWindow = null
    })

    updateWindow.currentId = currentId;
}


function createDetailsWindow(currentId) {
    // Create the browser window.
    detailsWindow = new BrowserWindow({
        width: 1500,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        parent: showCollegeWindow,
        modal: true,
    })

    // and load the index.html of the app.
    detailsWindow.loadFile('src/details.html')

    // Open the DevTools.
    // detailsWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    detailsWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        detailsWindow = null
    })

    detailsWindow.currentId = currentId;
}

function createShowCollegeWindow() {
    // Create the browser window.
    showCollegeWindow = new BrowserWindow({
        width: 800,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        parent: mainWindow,
        modal: true,
    })

    // and load the index.html of the app.
    showCollegeWindow.loadFile('src/show.html')

    // Open the DevTools.
    // showCollegeWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    showCollegeWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        showCollegeWindow = null
    })
}

function createLoginWindow() {
    // Create the browser window.
    loginWindow = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        parent: mainWindow,
        modal: true,
    })

    // and load the index.html of the app.
    loginWindow.loadFile('src/login.html')

    loginWindow.setMenuBarVisibility(false)

    // Open the DevTools.
    // loginWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    loginWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        loginWindow = null
    })
}

function createAdminWindow() {
    // Create the browser window.
    adminWindow = new BrowserWindow({
        width: 1500,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        parent: mainWindow,
        modal: true,
    })

    // and load the index.html of the app.
    adminWindow.loadFile('src/admin.html')

    // Open the DevTools.
    // adminWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    adminWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        adminWindow = null
    })
}

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1500,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

function createFeedbackWindow(currentId) {
    // Create the browser window.
    feedbackWindow = new BrowserWindow({
        width: 600,
        height: 460,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        parent: showCollegeWindow,
        modal: true,
    })

    // and load the index.html of the app.
    feedbackWindow.loadFile('src/feedback.html')

    // Open the DevTools.
    // feedbackWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    feedbackWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        feedbackWindow = null
    })

    feedbackWindow.currentId = currentId;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipc.on('open:window', function(event, arg) {
    switch (arg) {
        case 'login':
            createLoginWindow();
            break;
        case 'admin':
            createAdminWindow();
            break;
        case 'show-college':
            createShowCollegeWindow();
            break;
        case 'insert':
            createInsertWindow();
            break;
    }
})

ipc.on('refresh:window', function(event, arg) {
    switch (arg) {
        case 'admin':
            console.log("Refreshing Admin Window");
            adminWindow.reload();
            break;
    }
})

ipc.on('update:window', function(event, arg) {
    createUpdateWindow(arg)
})

ipc.on('details:window', function(event, arg) {
    createDetailsWindow(arg)
})

ipc.on('feedback:window', function(event, arg) {
    createFeedbackWindow(arg)
})