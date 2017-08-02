import {Injectable} from '@angular/core';

@Injectable()
export class TimerService {
    countMinutes: number;
    startTime: number;
    currentTime: number;

    constructor() {
        this.reset();
    }

    setCountdownTime(minutes: number) {
        this.countMinutes = minutes;
    }

    start(): void {
        this.startTime = this.timeNow();
    }

    stop(): void {
        this.reset();
    }

    reset(): void {
        this.countMinutes = 0;
        this.currentTime = 0;
        this.startTime = 0;
    }

    updateTime(): number {
        const future = new Date(this.startTime + this.countMinutes * 60000).getTime();
        this.currentTime = future - this.timeNow()
        if (this.currentTime < 0) {
            this.reset();
        }
        return this.currentTime;
    }

    timeNow(): number {
        return (new Date()).getTime();
    }
}