import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  imports: [CommonModule, QuestionComponent]
})
export class QuizComponent {

  @ViewChild(QuestionComponent)
  questionComponent!: QuestionComponent;

  questionData = {
    text: 'Яка мова використовується в Angular?',
    options: ['Java', 'TypeScript', 'Python', 'C#'],
    correctIndex: 1
  };

  selectedIndex: number | null = null;

  onAnswerSelected(index: number) {
    this.selectedIndex = index;
  }

  showCorrectAnswer() {
    this.questionComponent.showAnswer();
  }
}
