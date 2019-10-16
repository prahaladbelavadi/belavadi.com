import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList = [
    { content: 'content:1', header: 'header:1', tag: 'topic' },
    { content: 'content:2', header: 'header:2', tag: 'topic' },
    { content: 'content:3', header: 'header:3', tag: 'topic' },
    { content: 'content:4', header: 'header:4', tag: 'topic' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
