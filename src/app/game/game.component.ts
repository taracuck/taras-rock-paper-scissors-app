import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Choices } from '../interfaces/choices';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  score!: number;
  choices!: Choices;
  userWon!: number;
  rulesOpen: boolean = false;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.choices = this.gameService.getChoices();
    this.score = this.gameService.getScore();
  }

  assignRandomNumber = (): void => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    this.choices.computer = randomNumber;
  };

  setPlayerChoice = (choiceId: number): void => {
    this.choices.user = choiceId;
    setTimeout(() => {
      this.assignRandomNumber();
      this.gameService.setChoices(this.choices.user, this.choices.computer);
      this.gameService.getChoices();
      this.determineWinner(this.choices.user, this.choices.computer);
    }, 1000);
  };

  determineWinner = (user: number | null, computer: number | null) => {
    console.log(this.userWon);
    if (user === computer) {
      this.userWon = 2;
      this.gameService.setScore(0);
    } else if (
      (user === 1 && computer === 2) ||
      (user === 2 && computer === 3) ||
      (user === 3 && computer === 1)
    ) {
      this.userWon = 0;
      this.gameService.setScore(-1);
    } else if (
      (user === 2 && computer === 1) ||
      (user === 3 && computer === 2) ||
      (user === 1 && computer === 3)
    ) {
      this.userWon = 1;
      this.gameService.setScore(1);
    }
    this.score = this.gameService.getScore();
    console.log(this.userWon);
    console.log(this.choices);
  };

  clearGame = () => {
    this.gameService.setChoices(null, null);
    this.choices = this.gameService.getChoices();
  };

  resetScore = () => {
    this.gameService.resetScore();
    this.score = this.gameService.getScore();
    this.clearGame();
  };

  toggleRulesPopup = () => {
    this.rulesOpen = !this.rulesOpen;
  };

  checkUserChoice = (number: number): boolean => {
    console.log(number);
    console.log(this.choices.user);
    console.log(number === this.choices.user);
    return number === this.choices.user;
  };

  checkComputerChoice = (number: number): boolean => {
    return number === this.choices.computer;
  };
}
