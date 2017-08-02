import {Component, OnInit} from '@angular/core';
import {TimerService} from "./timer.service";

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
    providers: [TimerService]
})
export class TimerComponent implements OnInit {
    private currentTime: number;
    private timerService: TimerService;
    private timer: any;

    constructor(timerService: TimerService) {
        this.timerService = timerService;
        this.resetTimer();
    }

    ngOnInit() {
    }

    getCurrentTime() {
        return this.currentTime;
    }

    /**
     * Parsing input field
     * @returns {number} - parsed integer value
     */
    validateInputData(): number {
        const value = (<HTMLInputElement>document.getElementById('timerInputTime')).value;
        if (value.length > 0) {
            const minutes = parseInt(value);
            if (minutes > 0) {
                return minutes;
            }
            return 0;
        }
        return 0;
    }

    /**
     * Start countdown according to set min
     */
    startCount() {
        this.timerService.setCountdownTime(this.validateInputData());
        this.timerService.start();
        this.timer = setInterval(() => {
            this.currentTime = this.timerService.updateTime();
        }, 1);
    }


    resetTimer() {
        clearInterval(this.timer);
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
