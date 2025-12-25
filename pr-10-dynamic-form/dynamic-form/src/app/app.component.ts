import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

/* ===== Кастомний синхронний валідатор ===== */
export function noTestValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value || '').toLowerCase();
  return value.includes('test') ? { containsTest: true } : null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, noTestValidator]],
      skills: this.fb.array([])
    });
  }

  /* ===== Getter для FormArray ===== */
  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  /* ===== Додати навичку ===== */
  addSkill(): void {
    this.skills.push(this.fb.control('', Validators.required));
  }

  /* ===== Видалити навичку ===== */
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  /* ===== Сабміт форми (наступний крок) ===== */
  submit(): void {
    console.log(this.form.value);
  }
}
