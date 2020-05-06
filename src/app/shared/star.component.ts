import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'rating-stars',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input()
    rating: number;
    starsWidth: number;
    @Output()
    notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        console.log("changes rating " + this.rating)
        this.starsWidth = this.rating *  75 / 5;
        console.log("changes " + this.starsWidth)
    }

    updateRating(): void {
        this.notify.emit('clicked !')
    }
}