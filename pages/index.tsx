/** @jsx h */
import { h } from 'sift'
import Layout from './_layout.tsx'

interface IndexProps {
  title: string
}

export default function ({title}:IndexProps) {
  return (
    <Layout title="TIL">
      <header>
        <h1>TIL</h1>
        <a href="/page2">Page 2</a>
      </header>
    </Layout>
  )
}