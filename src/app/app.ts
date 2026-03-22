import { Component, ElementRef, isDevMode, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ImageType } from './models/image.models';

@Component({
	selector: 'app-root',
	imports: [MatButtonModule, RouterOutlet],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	isDevMode = isDevMode();
	@ViewChild('fileInput') fileInputRef?: ElementRef;

	constructor() {
		console.log('Initialized');
	}

	selectFiles(event: Event) {
		const files: FileList | null = (event.target as HTMLInputElement).files;
		const images: ImageType[] = [];
		if (files) {
			for (const file of files) {
				images.push(new ImageType(file.name, file));
			}
		}
		images.forEach((f) => console.log(f.name, f.id, f.state));
	}
}
