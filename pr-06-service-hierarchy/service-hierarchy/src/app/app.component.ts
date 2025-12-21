import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogicService } from './services/app-logic.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: string[] = [];

  constructor(private appLogicService: AppLogicService) {}

  ngOnInit(): void {
    this.data = this.appLogicService.getDataAndLog();
  }
}
