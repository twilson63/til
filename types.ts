import { z } from 'zod'

export const PostEntry = z.object({
  id: z.string(),
  type: z.literal('post'),
  title: z.string(),
  body: z.string(),
  published: z.boolean()
})

export type PostEntry = z.infer<typeof PostEntry>