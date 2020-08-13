import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [

    ];
  }

  agregarPost() {
    console.log(this.arrPosts.push());
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts);
    });
  }

  getPostByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts.filter(publicacion => {
        return publicacion.categoria === pCategoria;
      }));
    });
  }
}
