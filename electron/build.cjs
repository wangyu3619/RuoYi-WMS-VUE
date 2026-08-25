const { spawnSync } = require('node:child_process')
const path = require('node:path')

const cliPath = path.join(path.dirname(require.resolve('electron-builder/package.json')), 'cli.js')
const targets = process.argv.includes('--dir') ? ['--dir'] : ['nsis', 'portable']

const result = spawnSync(process.execPath, [
  cliPath,
  '--win',
  ...targets,
  '--config.electronDist=node_modules/electron/dist'
], {
  stdio: 'inherit',
  env: {
    ...process.env,
    ELECTRON_BUILDER_BINARIES_MIRROR: process.env.ELECTRON_BUILDER_BINARIES_MIRROR
      || 'https://npmmirror.com/mirrors/electron-builder-binaries/'
  }
})

if (result.error) throw result.error
process.exit(result.status ?? 1)
