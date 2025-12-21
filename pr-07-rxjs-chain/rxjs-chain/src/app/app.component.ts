import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedUserId$ = new BehaviorSubject<number>(1);
  posts$!: Observable<any[]>;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.posts$ = this.selectedUserId$.pipe(
      switchMap(userId => this.apiService.getPostsByUserId(userId))
    );
  }
  selectUser(id: number) {
    this.selectedUserId$.next(id);
  }
}
