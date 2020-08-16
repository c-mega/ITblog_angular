import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.post = await this.appService.getById(params.postId);
    });
  }





}
