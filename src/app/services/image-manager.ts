import { Injectable } from '@angular/core';
import { ImageType } from '../models/image.models';

@Injectable({
	providedIn: 'root',
})
export class ImageManager {
    private _images: ImageType[] = [];
    set images(arr: ImageType[]) {
        this._images = arr;
    }
    get images(): ImageType[] {
        return this._images
    }
}
