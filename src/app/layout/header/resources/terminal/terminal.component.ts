import { Component, OnInit } from '@angular/core';
import { TerminalService } from 'primeng/components/terminal/terminalservice';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [TerminalService]

})
export class TerminalComponent implements OnInit {

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {
      const response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
      this.terminalService.sendResponse(response);
    });
  }

  ngOnInit() {
  }



}
