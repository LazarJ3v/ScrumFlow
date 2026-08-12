import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/auth';

    login(email: string, password: string) {
        return this.http.post(`${this.apiUrl}/login`, { email, password });
    }

    register(data: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: string;
    }) {
        return this.http.post(`${this.apiUrl}/register`, data);
    }

    // logout(){

    // }
}