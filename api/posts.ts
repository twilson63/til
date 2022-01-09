import { assoc } from 'ramda'
import { cuid } from 'cuid'
import crocks from 'crocks'
import { hyper } from '../hyper.ts'
import { PostEntry } from '../types.ts'

const { Async } = crocks

export default (data : FormData) => {
  return Async.of(data)
    .map(toObject)
    .map(generateIdentifier)
    .map(setType)
    .map(setDraft)
    .chain(validate)
    .chain(create)
    .toPromise()
}

/* pure functions */
function toObject(data:FormData) {
  return { title: data.get('title'), body: data.get('body') }
}

function generateIdentifier(o:PostEntry) {
  return assoc('id', `post-${cuid()}`, o)
}

function setType(o: PostEntry) {
  return assoc('type', 'post', o)
}

function setDraft(o: PostEntry) {
  return assoc('published', false, o)
}

function validate(o: PostEntry) {
  return Async.fromPromise(PostEntry.parseAsync.bind(PostEntry))(o)
}

function create(o: PostEntry) {
  return Async.fromPromise(hyper.data.add)(o)
}

// function log(x:string) {
//   console.log(x)
//   return x
// }