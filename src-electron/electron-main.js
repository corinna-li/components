import { app, BrowserWindow, nativeTheme } from 'electron'
import path from 'path'

try {
  if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(require('path').join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) { }

let mainWindow

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    useContentSize: true,
    frame: false, //這是在說視窗最上面預設的那條bar 把它隱藏，就可以用自己設計的bar來控制 
    //然後要在bar標籤上 加上 q-electron-drag 就可以拖動視窗了

    webPreferences: {
      contextIsolation: true,
      // More info: /quasar-cli/developing-electron-apps/electron-preload-script

      // 在electron 10.0.0之后，remote模块默认关闭
      // 必须手动设置webPreferences中的enableRemoteModule为true之后才能使用
      enableRemoteModule: true, // 这里是关键设置
      
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
