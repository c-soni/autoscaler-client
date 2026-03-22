import { Component, inject } from '@angular/core';
import { LoggingService } from '../services/logging-service';

@Component({
	selector: 'app-logger-view',
	imports: [],
	templateUrl: './logger-view.html',
	styleUrl: './logger-view.scss',
})
export class LoggerView {
	private loggingService = inject(LoggingService);
}
