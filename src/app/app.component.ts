import { Repository } from "./models/Repository";
import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.styles.css"],
	animations: []
})
export class AppComponent {
	user: string = "";
	repos: Array<any> = [];

	// adicionando o HttpClient
	constructor(private httpClient: HttpClient) {}

	// Headers
	httpOptions = {
		headers: new HttpHeaders({ "Content-Type": "application/json" })
	};

	req() {
		this.repos = [];
		this.getRepos().subscribe((repo: Repository[]) => {
			let index = 0;
			setInterval(() => {
				if (index === repo.length) {
					return;
				}
				this.repos.push(new Repository(repo[index]));
				index++;
			}, 200);
		});
		this.user = "";
	}

	getRepos(): Observable<Repository[]> {
		let url: string = `https://api.github.com/users/${this.user}/repos`; // api github
		return this.httpClient.get<Repository[]>(url).pipe(retry(2));
	}
}
