// Electron 44 的 npm 包不再通过安装钩子下载运行时，打包前显式准备。
// @electron/get 会使用 electron 包内随附的官方 checksums.json 校验下载内容。
process.env.ELECTRON_MIRROR ||= 'https://npmmirror.com/mirrors/electron/'
require('electron/install.js')
