import fs from 'fs'
import path from 'path'

function extractRaw(raw: string) {
    // hilangkan blok ```json dan ```
    let cleaned = raw.trim()
        .replace(/^```json/, '')
        .replace(/```$/, '')
        .trim()

    // convert escape sequence \n, \" menjadi nyata
    cleaned = cleaned.replace(/\\n/g, '\n').replace(/\\"/g, '"')

    return cleaned
}

function processItem(raw: string) {
    const cleaned = extractRaw(raw)

    try {
        return JSON.parse(cleaned)
    } catch (err) {
        console.error("❌ Parse gagal:", err)
        console.log("==== DEBUG RAW YANG SUDAH DIBERSIHKAN ====")
        console.log(cleaned)
        console.log("==========================================")
        return null
    }
}

// Cara pakai:
const input = JSON.parse(fs.readFileSync(path.join(__dirname, 'parsed.json'), 'utf8'))
const output = []

for (const item of input) {
    if (!item.raw) continue
    const parsed = processItem(item.raw)
    if (parsed) output.push(parsed)
}

fs.writeFileSync('./cleaned.json', JSON.stringify(output, null, 4))
console.log("✔ selesai")
