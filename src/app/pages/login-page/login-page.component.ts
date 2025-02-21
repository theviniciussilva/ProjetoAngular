import { Component } from '@angular/core'
import { LoginDefaultLayoutComponent } from '../../components/login-default-layout/login-default-layout.component'
import { LoginInuptLayoutComponent } from '../../components/login-input-layout/login-input-layout.component'
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'

interface LoginForm {
	email: FormControl
	password: FormControl
}

@Component({
	selector: 'app-login-page',
	imports: [
		LoginDefaultLayoutComponent,
		LoginInuptLayoutComponent,
		ReactiveFormsModule,
	],
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
	loginForm!: FormGroup<LoginForm>

	constructor() {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
		})
	}

	submit() {
		console.log(this.loginForm.valid)
		console.log(this.loginForm.value)
	}
}
