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

  ngOnInit(): void {

    this.appService.getAllPosts()
      .then(arrPos => {
        this.posts = arrPos;
      }).catch(err => console.log(err));
  }

}

