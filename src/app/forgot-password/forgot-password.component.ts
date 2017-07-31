import {Component, OnInit} from '@angular/core';
import {ForgotPasswordService} from './forgot-password.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
    providers: [ForgotPasswordService]
})
export class ForgotPasswordComponent implements OnInit {
    correctAnswer = false;
    userAnswer: number;
    question: string;

    constructor(private forgotPassService: ForgotPasswordService) {
    }

    ngOnInit() {
        this.question = this.forgotPassService.createQuestion();
    }

    checkAnswer() {
        this.correctAnswer = this.forgotPassService.verifyAnswer(this.userAnswer);
    }
}
