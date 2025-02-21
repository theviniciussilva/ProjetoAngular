import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
	selector: 'app-login-default-layout',
	imports: [],
	templateUrl: './login-default-layout.component.html',
	styleUrl: './login-default-layout.component.scss',
})
export class LoginDefaultLayoutComponent {
	@Input() tittle: string = ''
	@Input() subtittle: string = ''
	@Output('submit') onSubmit = new EventEmitter()
	@Input() disablePrimaryButton: boolean = true

	submit() {
		this.onSubmit.emit()
	}
}
