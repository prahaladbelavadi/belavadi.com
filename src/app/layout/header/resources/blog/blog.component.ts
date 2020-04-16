import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  bloglist = [
    { content: 'content:1', header: 'header:1' },
    { content: 'content:2', header: 'header:2' },
    { content: 'content:3', header: 'header:3' },
    { content: 'content:4', header: 'header:4' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
