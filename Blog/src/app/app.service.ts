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

}
