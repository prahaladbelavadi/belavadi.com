import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  data2: TreeNode[];

  selectedNode: TreeNode;

  constructor() { }

  ngOnInit() {
    this.data2 = [{
      label: 'F.C Barcelona',
      expanded: true,
      children: [
        {
          label: 'F.C Barcelona',
          expanded: true,
          children: [
            {
              label: 'Chelsea FC'
            },
            {
              label: 'F.C. Barcelona'
            }
          ]
        },
        {
          label: 'Real Madrid',
          expanded: true,
          children: [
            {
              label: 'Bayern Munich'
            },
            {
              label: 'Real Madrid'
            }
          ]
        }
      ]
    }];
  }
}
