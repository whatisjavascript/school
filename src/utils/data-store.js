import path from 'path'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import fs from 'fs-extra'
import { app, remote } from 'electron'

const APP = process.type === 'renderer' ? remote.app : app
const DATA_STORE_PATH = APP.getPath('userData')
if (!fs.pathExistsSync(DATA_STORE_PATH)) {
  fs.mkdirpSync(DATA_STORE_PATH)
}
const adapter = new FileSync(path.join(DATA_STORE_PATH, '/mytools-data.json'))
const db = low(adapter)

export default db
