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
import { LoginPageService } from '../../services/login-page.service'
import { ToastrService } from 'ngx-toastr'

export interface SignupForm {
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
	providers: [LoginPageService],
	templateUrl: './signup-page.component.html',
	styleUrl: './signup-page.component.scss',
})
export class SignupPageComponent {
	signupForm!: FormGroup<SignupForm>

	constructor(
		private router: Router,
		private loginService: LoginPageService,
		private toastService: ToastrService,
	) {
		this.signupForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
		})
	}

	submit() {
		this.loginService
			.login(this.signupForm.value.email, this.signupForm.value.password)
			.subscribe({
				next: () => this.toastService.success('Login realizado com sucesso'),
				error: () =>
					this.toastService.error(
						'Erro inesperado! Tente novamente mais tarde',
					),
			})
	}
	navigate() {
		this.router.navigate([''])
	}
}
