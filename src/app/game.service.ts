import { Injectable } from '@angular/core';
import { Choices } from './interfaces/choices';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  score: number = 0;
  choices: Choices = { user: null, computer: null };
  userWon!: boolean;

  constructor() {}

  getChoices = (): Choices => {
    return this.choices;
  };

  setChoices = (user: number | null, computer: number | null) => {
    this.choices = { user: user, computer: computer };
  };

  setScore = (adjustment: number): void => {
    this.score += adjustment;
  };

  getScore = (): number => {
    return this.score;
  };

  resetScore = () => {
    this.score = 0;
  };
}
