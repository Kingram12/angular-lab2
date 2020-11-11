import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  shown = false;

  constructor() {}

  ngOnInit(): void {}

  submitPost = (form: NgForm) => {
    let newThought: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.submitted.emit(newThought);
  };

  toggleDisplay() {
    this.shown = !this.shown;
  }
}
