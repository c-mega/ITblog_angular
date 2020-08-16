import { Injectable } from '@angular/core';
import { POSTS } from './database/posts.db';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  arrPosts: Post[];

  constructor() {

  }

  agregarPost(Post): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      POSTS.push(Post);
      resolve('Este post se ha agregado correctamente');

    });


  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(POSTS);
    });
  }

  getPostByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(POSTS.filter(publicacion => {
        return publicacion.categoria === pCategoria;
      }));
    });
  }

  getById(pId): Promise<Post> { //para recuperar al post por su id
    return new Promise((resolve, reject) => {
      let post = POSTS.find(post => {
        return post.id == pId;
      });
      resolve(post);
    });
  }




}
