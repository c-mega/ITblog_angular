import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [];
  }

  agregarPost() { //este es un método de formularioComponent

  }

  getAllPosts(): Post[] {
    return this.arrPosts;
  }

  getAllPostsPromise(): Promise<Post[]> { //cuando la promesa se resuelva devolverá un arr de posts
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts);
    });




  }

  getPostsByCategoria(): Promise<Post[]> { //Este es un método de blogComponent
    return new Promise((resolve, reject) => {
      let arrFiltrado = this.arrPosts.filter(cat => {
        return cat.categoria;
      });
      resolve(arrFiltrado)
    });
  }

}


