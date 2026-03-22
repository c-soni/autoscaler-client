import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerView } from './logger-view/logger-view';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, LoggerView],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	protected readonly title = signal('autoscaler');
}
