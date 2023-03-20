import { type posts } from '@prisma/client';
import prisma from '@/lib/prisma';

export default class PostService {
  public async createPost(data: posts) {
    const post = await prisma.posts.create({ data });
    return post;
  }

  public async getPosts() {
    const posts = await prisma.posts.findMany();
    return posts;
  }
}
