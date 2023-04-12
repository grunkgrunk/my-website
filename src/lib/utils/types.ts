export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type SparkleType = {
  id: string,
  createdAt: number,
  color: string,
  size: number,
  style: any
}

export type TagType = {
  label: string,
  color?: 'primary' | 'secondary'
}

export type SocialLink = {
  
}

export type Feature = {
  name: string,
  description: string,
  image: string,
  link?: string,
  sourceCode?: string,
  blogPostLink?: string,
  tags: TagType[]
}

export type BlogPost = {
  tags: string[],
  categories: string[],
  keywords: string[],
  hidden: boolean,
  slug: string,
  title: string,
  date: string,
  updated: string,
  excerpt: string,
  html: string | undefined,
  readingTime: string,
  relatedPosts: BlogPost[],
  coverImage: Srcset | undefined,
  hideCoverImage: boolean
}

export type Srcset = {
  avif?: string,
  webp?: string,
  png?: string
}