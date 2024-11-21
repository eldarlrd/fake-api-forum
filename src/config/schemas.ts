import { object, string, number, boolean, type z, type ZodSchema } from 'zod';

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

const photos = object({
  albumId: number(),
  id: number(),
  title: string(),
  url: string(),
  thumbnailUrl: string()
}).array();

const albums = object({
  userId: number(),
  id: number(),
  title: string()
}).array();

const todos = object({
  userId: number(),
  id: number(),
  title: string(),
  completed: boolean()
}).array();

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

interface SchemaProps {
  users: z.infer<typeof users>;
  photos: z.infer<typeof photos>;
  albums: z.infer<typeof albums>;
  todos: z.infer<typeof todos>;
  posts: z.infer<typeof posts>;
  comments: z.infer<typeof comments>;
}

const SCHEMAS: Record<string, ZodSchema> = {
  users,
  photos,
  albums,
  todos,
  posts,
  comments
};

export { type SchemaProps, SCHEMAS };
