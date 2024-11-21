import { object, string, number, boolean, type z, type ZodType } from 'zod';

const posts = object({
  userId: number(),
  id: number(),
  title: string(),
  body: string()
}).array();

const comments = object({
  postId: number(),
  id: number(),
  name: string(),
  email: string(),
  body: string()
}).array();

const albums = object({
  userId: number(),
  id: number(),
  title: string()
}).array();

const photos = object({
  albumId: number(),
  id: number(),
  title: string(),
  url: string(),
  thumbnailUrl: string()
}).array();

const todos = object({
  userId: number(),
  id: number(),
  title: string(),
  completed: boolean()
}).array();

const geo = object({
  lat: string(),
  lng: string()
});

const address = object({
  street: string(),
  suite: string(),
  city: string(),
  zipcode: string(),
  geo
});

const company = object({
  name: string(),
  catchPhrase: string(),
  bs: string()
});

const users = object({
  id: number(),
  name: string(),
  username: string(),
  email: string(),
  phone: string(),
  website: string(),
  address,
  company
}).array();

interface SchemaProps {
  posts: z.infer<typeof posts>;
  comments: z.infer<typeof comments>;
  albums: z.infer<typeof albums>;
  photos: z.infer<typeof photos>;
  todos: z.infer<typeof todos>;
  users: z.infer<typeof users>;
}

const SCHEMAS: { [K in keyof SchemaProps]: ZodType<SchemaProps[K]> } = {
  posts,
  comments,
  albums,
  photos,
  todos,
  users
};

export { type SchemaProps, SCHEMAS };
