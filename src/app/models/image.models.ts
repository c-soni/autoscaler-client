export enum ImageState {
	Uploading = 'Uploading',
	InQueue = 'InQueue',
	Processing = 'Processing',
	Ready = 'Ready',
}

export class ImageType {
	name!: string;
	id!: string;
	state!: ImageState;
	handle!: File;

	constructor(name: string, handle: File) {
		this.name = name;
		this.id = crypto.randomUUID();
		this.state = ImageState.Uploading;
		this.handle = handle;
	}
}
