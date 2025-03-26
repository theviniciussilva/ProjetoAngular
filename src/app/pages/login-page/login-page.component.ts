import { Component } from '@angular/core'
import { LoginDefaultLayoutComponent } from '../../components/login-default-layout/login-default-layout.component'
import { LoginInputLayoutComponent } from '../../components/login-input-layout/login-input-layout.component'
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from '../../services/login-page.service'
import { ToastrService } from 'ngx-toastr'

export interface LoginForm {
	email: FormControl
	password: FormControl
}

@Component({
	selector: 'app-login-page',
	imports: [
		LoginDefaultLayoutComponent,
		LoginInputLayoutComponent,
		ReactiveFormsModule,
	],
	providers: [LoginService],
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
	loginForm!: FormGroup<LoginForm>

	constructor(
		private router: Router,
		private loginService: LoginService,
		private toastService: ToastrService,
	) {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
		})
	}

	submit() {
		this.loginService
			.login(this.loginForm.value.email, this.loginForm.value.password)
			.subscribe({
				next: () => {
					this.toastService.success('Login realizado com sucesso')
					this.router.navigate(['user'])
				},
				error: () =>
					this.toastService.error(
						'Erro inesperado! Tente novamente mais tarde',
					),
			})
	}
	navigate() {
		this.router.navigate(['signup'])
	}
}
