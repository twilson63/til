/** @jsx h */
/** @jsxFrag h.Fragment */
import { h } from 'sift'
import type { JSX } from 'sift'

interface LayoutProps {
  title: string,
  children: JSX.Element | JSX.Element[]
}

export default ({title, children} : LayoutProps) : JSX.Element =>
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>
        <script src="https://unpkg.com/htmx.org@1.6.1"></script>
      </head>
      <body>
        {children}
      </body>
    </html>

  