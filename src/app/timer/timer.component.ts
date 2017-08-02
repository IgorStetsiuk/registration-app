import {Component, OnInit} from '@angular/core';
import {TimerService} from "./timer.service";

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
    providers: [TimerService]
})
export class TimerComponent implements OnInit {
    currentTime: number;
    timerId: any;
    userTime;

    constructor(private timerService: TimerService) {
        this.resetTimer();
    }

    ngOnInit() {

    }

    getCurrentTime() {
        return this.currentTime;
    }

    validateInputData(): number {
        const value = this.userTime;
        if (value.length > 0) {
            const minutes = parseInt(value);
            if (minutes > 0) {
                return minutes;
            }
            return 0;
        }
        return 0;
    }

    startCount() {
        this.timerService.setCountdownTime(this.validateInputData());
        this.timerService.start();
        this.timerId = setInterval(() => {
            this.currentTime = this.timerService.updateTime();
        }, 1);
    }


    resetTimer() {
        clearInterval(this.timerId);
        this.timerService.reset();
        this.currentTime = this.timerService.updateTime();
    }


    formatTime(timeMs: number) {
        let minutes: string,
            seconds: string;
        minutes = Math.floor(timeMs / 60000).toString();
        seconds = ((timeMs % 60000) / 1000).toFixed(3);
        return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
    }

}
