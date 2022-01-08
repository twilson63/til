/** @jsx h */
import { serve, h, jsx } from 'sift'
import IndexHTML from './pages/index.tsx'
import Page2 from './pages/page2.tsx'

serve({
  '/': () => jsx(<IndexHTML title="TIL" />),
  '/page2': () => jsx(<Page2></Page2>)
})