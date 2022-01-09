import "https://deno.land/x/dotenv@v3.1.0/load.ts"
import { connect } from 'hyper-connect'
export const hyper =  connect(`${Deno.env.get('HYPER')}`)
