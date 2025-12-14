import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  imports: [CommonModule]
})
export class QuestionComponent {

  @Input() question!: {
    text: string;
    options: string[];
    correctIndex: number;
  };

  @Output() answerSelected = new EventEmitter<number>();

  showCorrect = false;

  selectAnswer(index: number) {
    this.answerSelected.emit(index);
  }

  showAnswer() {
    this.showCorrect = true;
  }
}

