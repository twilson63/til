/** @jsx h */
import { h } from 'sift'
import Layout from './_layout.tsx'

export default () =>
  <Layout title="TIL - Post">
    <header>
      <h1>TIL - Post</h1>
    </header>
    <main>
      <section>
        <form hx-post="/api/posts">
          <div>
            <label for="title">Title</label>
            <input id="title" name="title" style="width: 100%" />
          </div>
          <div>
            <textarea placeholder="Enter content here." id="body" name="body" style="width: 100%; height: 200px;"></textarea>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <button>Post</button>
            <a href="/"><i>Cancel</i></a>
          </div>
        </form>
      </section>
    </main>
  </Layout>