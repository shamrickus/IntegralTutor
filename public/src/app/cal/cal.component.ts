import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-cal',
	templateUrl: './cal.component.html',
	styleUrls: ['./cal.component.scss']
})
export class CalComponent implements OnInit {
	public url: string = "https://calendar.google.com/calendar/embed?mode=week&src=tylerjohnbuchanan%40gmail.com&ctz=America/";

	constructor() {
	}

	ngOnInit() {
	}

}
