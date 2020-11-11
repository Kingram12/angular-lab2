import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: 'Title1', thought: 'Thought1' },
    { title: 'Title2', thought: 'Thought2' },
    { title: 'Title3', thought: 'Thought3' },
    { title: 'Title4', thought: 'Thought4' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit = (post: Post): void => {
    this.posts.push(post);
  };

  onDelete = (index: number): void => {
    this.posts.splice(index, 1);
  };
}
