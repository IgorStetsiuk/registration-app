import {Injectable} from '@angular/core';


@Injectable()
export class ForgotPasswordService {
    answer: number;


    createQuestion() {
        const additionOne = this.randomNumber(1, 23);
        const additionTwo = this.randomNumber(1, 23);
        this.answer = additionOne + additionTwo;
        return `${additionOne} + ${additionTwo}`;
    }

    randomNumber(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    verifyAnswer(an: number):boolean {
        return this.answer === an;
    }

}