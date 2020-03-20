export class Repository {
	private id: number;
	private name: string;
	private fullName: string;
	private isPrivate: boolean;
	private language: string;

	constructor(object) {
		this.id = object.id;
		this.name = object.name;
		this.fullName = object.full_name;
		this.isPrivate = object.private;
		this.language = object.language;
	}
}
