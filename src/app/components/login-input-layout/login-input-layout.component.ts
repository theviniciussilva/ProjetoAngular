import { Component, Input } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

type InputType = 'text' | 'password' | 'email'

@Component({
	selector: 'app-login-inupt-layout',
	imports: [ReactiveFormsModule],
	templateUrl: './login-input-layout.component.html',
	styleUrl: './login-input-layout.component.scss',
})
export class LoginInuptLayoutComponent {
	@Input() inputLabel: string = ''
	@Input() placeholder: string = ''
	@Input() inputName: string = ''
	@Input() inputType: InputType = 'text'
	@Input() formName: string = ''

	value = ''
}
