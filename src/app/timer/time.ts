export interface ClockEvents {
    /**
     * Called once the counting started
     */
    start(): void ;

    /**
     * Called when counting stopped
     */
    stop(): void ;

    /**
     * Called when reset statement is needed
     */
    reset(): void ;

    /**
     * Called when time updates
     */
    updateTime(): number;
}

/**
 * Global function
 * @returns {number} - current time
 */
export function currentTime(): number {
    return (new Date()).getTime();
}

export function formatTime(timeMs: number) {
    let minutes: string,
        seconds: string;

    minutes = Math.floor(timeMs / 60000).toString();
    seconds = ((timeMs % 60000) / 1000).toFixed(3);
    return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
}