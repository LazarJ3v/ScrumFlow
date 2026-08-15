import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Team } from "../../models/team.model";

@Injectable({ providedIn: 'root' })
export class TeamService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/team';

    getAll(skip: number, take: number) {
        return this.http.get<Team[]>(`${this.apiUrl}?skip=${skip}&take=${take}`);
    }
}