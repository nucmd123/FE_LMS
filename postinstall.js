/**
 * Copy tinyMCE for my host
 */
import { fileURLToPath } from 'url'
import path from 'path'
import fse from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// console.log(__dirname, typeof __dirname)

fse.emptyDirSync(path.join(__dirname, 'public', 'tinymce'))
fse.copySync(
  path.join(__dirname, 'node_modules', 'tinymce'),
  path.join(__dirname, 'public', 'tinymce'),
  { overwrite: true },
)
