import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    timerId;
    time = Date.now();

    constructor() {
    }

    ngOnInit() {
    }

    startTimer(){
        // this.timerId= setInterval(()=>{
        //
        // },1000)
    }
}
