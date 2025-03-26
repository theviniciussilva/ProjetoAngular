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

export interface SignupForm {
	name: FormControl
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
	templateUrl: './signup-page.component.html',
	styleUrl: './signup-page.component.scss',
})
export class SignupPageComponent {
	signupForm!: FormGroup<SignupForm>

	constructor(
		private router: Router,
		private loginService: LoginService,
		private toastService: ToastrService,
	) {
		this.signupForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
			name: new FormControl('', [Validators.required, Validators.minLength(3)]),
		})
	}

	submit() {
		this.loginService
			.signup(
				this.signupForm.value.name,
				this.signupForm.value.email,
				this.signupForm.value.password,
			)
			.subscribe({
				next: () => this.toastService.success('Cadastro realizado com sucesso'),
				error: () =>
					this.toastService.error(
						'Erro inesperado! Tente novamente mais tarde',
					),
			})
	}
	navigate() {
		this.router.navigate(['login'])
	}
}
