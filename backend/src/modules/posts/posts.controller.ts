import { type NextFunction, type Request } from 'express';
import { type posts } from '@prisma/client';
import { HttpStatusCode } from 'axios';
import { type CustomResponse } from '@/types/common.type';
import Api from '@/lib/api';
import PostService from './posts.service';

export default class PostController extends Api {
  private readonly postService = new PostService();

  public createPost = async (
    req: Request,
    res: CustomResponse<posts>,
    next: NextFunction
  ) => {
    try {
      const post = await this.postService.createPost(req.body);
      this.send(res, post, HttpStatusCode.Created, 'createPost');
    } catch (e) {
      next(e);
    }
  };

  public getPosts = async(
    req: Request,
    res: CustomResponse<posts>,
    next: NextFunction
  ) => {
    try {
      const posts = await this.postService.getPosts();
      this.send(res, posts, HttpStatusCode.Ok, 'getPost');
    } catch (e) {
      next(e);
    }
  }
}
