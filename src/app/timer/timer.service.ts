import {Injectable} from '@angular/core';
import {ClockEvents, currentTime} from './time';

@Injectable()
export class TimerService implements ClockEvents {

    private countMinutes: number;
    private startTime: number;
    public currentTime: number;

    constructor() {
        this.reset();
    }

    setCountdownTime(minutes: number) {
        this.countMinutes = minutes;
    }

    start(): void {
        this.startTime = currentTime();
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
        this.currentTime = future - currentTime();
        if (this.currentTime < 0) {
            this.reset();
        }
        return this.currentTime;
    }
}