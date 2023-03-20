import { Router } from 'express';
import Controller from './posts.controller';
import { CreatePostDto } from '@/dto/post.dto';
import RequestValidator from '@/middlewares/request-validator';
import { verifyAuthToken } from '@/middlewares/auth';

const posts: Router = Router();
const controller = new Controller();

/**
 * Create post body
 * @typedef {object} CreatePostBody
 * @property {string} post - post 
 */
/**
 * Post
 * @typedef {object} Post
 * @property {string} post - post 
 */
/**
 * POST /posts/create
 * @summary Create post
 * @tags posts
 * @param {CreateUserBody} request.body.required
 * @return {Post} 201 - post created
 */
/**
 * POST /posts/
 * @summary Create post
 * @tags posts
 * @param {CreateUserBody} request.body.required
 * @return {Post} 200 - post created
 */
posts.post(
  '/create',
  verifyAuthToken,
  RequestValidator.validate(CreatePostDto),
  controller.createPost
);

posts.get(
  '/',
  controller.getPosts
);

export default posts;
