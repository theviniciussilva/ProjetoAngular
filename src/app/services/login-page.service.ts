import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LoginResponse } from '../components/types/login-response.type'
import { tap } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class LoginPageService {
	constructor(private http: HttpClient) {}

	login(email: string, password: string) {
		//estende uma função
		return this.http.post<LoginResponse>('/login', { email, password }).pipe(
			tap((value) => {
				sessionStorage.setItem('auth-token', value.token)
			}),
		)
	}
}
