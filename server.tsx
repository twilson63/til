/** @jsx h */
import { serve, h, jsx } from 'sift'
import IndexHTML from './pages/index.tsx'
import Form from './pages/form.tsx'
import posts from './api/posts.ts'
import Confirmation from './components/confirmation.tsx'
import { hyper } from './hyper.ts'
import type { Results } from 'hyper-types'
import type { PostEntry } from './types.ts'

serve({
  '/': async () => {
    const { docs } : Results<PostEntry> = await hyper.data.query({type: 'post'})
    return jsx(<IndexHTML title="TIL" posts={docs} />)
  },
  '/form': () => jsx(<Form />),
  '/api/posts': async (req) => {
    const data = await req.formData()
    const result = await posts(data).catch((err : Error) => ({ok: false, error: err.message }))
    if (result.ok) {
      return jsx(<Confirmation />)
    } else {
      return jsx(<div>Error</div>)
    }
    
  }
    
})