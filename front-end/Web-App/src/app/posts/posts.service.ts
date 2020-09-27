import { triggerAsyncId } from 'async_hooks';
import { title } from 'process';
import {Post} from './post.model'

export class postsServices{
  private posts: Post[] = [];


  getPosts{
    return [...this.posts];
  }

  addPost(title: triggerAsyncId, ontent: string){
    const post: Post = {title: title, content: content};
    this.posts.push(post);

  }
}
