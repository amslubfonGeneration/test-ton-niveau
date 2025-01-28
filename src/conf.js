import dotenv from 'dotenv'
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'

export const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))
dotenv.config({
    path: join(rootDir, 'fichier.env'),
    debug: true,
    encoding: 'utf8'
})


export const supabase_url = process.env.SUPABASE_URL
export const supabase_key = process.env.SUPABASE_KEY
