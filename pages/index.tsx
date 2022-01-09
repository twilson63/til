/** @jsx h */
import { h } from 'sift'
import Layout from './_layout.tsx'
import type { PostEntry } from '../types.ts'

interface IndexProps {
  title: string,
  posts: PostEntry[]
}

export default function ({title, posts}:IndexProps) {
  return (
    <Layout title="TIL">
      <header>
        <h1>{title}</h1>
        <a href="/form">New Post</a>
      </header>
      <main>
        <section>
          <h2>Posts</h2>
        </section>
        <section>
          {posts.map(Card)}
        </section>
      </main>
    </Layout>
  )
}

function Card(post: PostEntry) {
  return (<aside>
    <header>
      <h3>{post.title}</h3>
    </header>
    <div>
      {post.body}
    </div>
    <button style="width: 100%;">Edit</button>
  </aside>)
}