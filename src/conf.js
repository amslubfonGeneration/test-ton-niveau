import dotenv from 'dotenv'
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'

export const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))



const supabase_url = process.env.SUPABASE_URL
const supabase_key = process.env.SUPABASE_KEY
