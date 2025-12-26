import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('INIT WORKS');

    this.apiService.getUsers().subscribe(data => {
      console.log('users', data);
    });

    this.apiService.getPosts().subscribe(data => {
      console.log('posts', data);
    });

    this.apiService.getComments().subscribe(data => {
      console.log('comments', data);
    });
  }
}
