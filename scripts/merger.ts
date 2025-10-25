import { readFileSync, readdirSync, writeFileSync } from "fs"
import path from 'path'

const basePath = path.join(__dirname, '../data/ingredients')
const content: string[] = []

readdirSync(basePath).map((file) => {
    content.push(readFileSync(path.join(basePath, file), 'utf-8'))
})

writeFileSync(path.join(basePath, 'merged.csv'), content.join('\n'))