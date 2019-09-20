import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


 items: MenuItem[];

    activeIndex: number = 1;

    constructor() {}

    ngOnInit() {
        this.items = [{
                label: 'Fixate',
                command: (event: any) => {
                    this.activeIndex = 0;
                    console.log({severity:'info', summary:'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Record',
                command: (event: any) => {
                    this.activeIndex = 1;
                    console.log({severity:'info', summary:'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Positive feedback',
                command: (event: any) => {
                    this.activeIndex = 2;
                    console.log({severity:'info', summary:'Pay with CC', detail: event.item.label});
                }
            },
            {
                label: '',
                command: (event: any) => {
                    this.activeIndex = 3;
                    console.log({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            }
        ];
    }}
