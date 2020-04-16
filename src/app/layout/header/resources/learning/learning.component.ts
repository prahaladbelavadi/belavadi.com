import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  learningList = [
    { content: 'content:1', header: 'header:1', tag: 'topic' },
    { content: 'content:2', header: 'header:2', tag: 'topic' },
    { content: 'content:3', header: 'header:3', tag: 'topic' },
    { content: 'content:4', header: 'header:4', tag: 'topic' }
  ];

  constructor() { }

  ngOnInit() {
  }



}
