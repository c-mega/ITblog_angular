import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Post } from '../models/post.model';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private appService: AppService) { }

  async ngOnInit() {

    this.posts = await this.appService.getAllPosts();
    console.log(this.appService.getAllPosts());

  }

  async onChange($event) {
    if ($event.target.value === 'selecciona') {
      this.posts = await this.appService.getAllPosts();
    } else {
      this.posts = await this.appService.getPostByCategoria($event.target.value);
    }
  }




}

