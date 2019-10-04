import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  constructor() { }


  data: TreeNode[];

  ngOnInit() {
    this.data = [{
      label: 'Root',
      children: [
        {
          label: 'Child 1',
          children: [
            {
              label: 'Grandchild 1.1'
            },
            {
              label: 'Grandchild 1.2'
            }
          ]
        },
        {
          label: 'Child 2',
          children: [
            {
              label: 'Child 2.1'
            },
            {
              label: 'Child 2.2'
            }
          ]
        }
      ]
    }];

  }
}
