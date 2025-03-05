import { Component, forwardRef, Input } from '@angular/core'
import {
	ControlValueAccessor,
	NG_VALUE_ACCESSOR,
	ReactiveFormsModule,
} from '@angular/forms'

type InputType = 'text' | 'password' | 'email'

@Component({
	selector: 'app-login-input-layout',
	imports: [ReactiveFormsModule],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => LoginInputLayoutComponent),
			multi: true,
		},
	],
	templateUrl: './login-input-layout.component.html',
	styleUrl: './login-input-layout.component.scss',
})
export class LoginInputLayoutComponent implements ControlValueAccessor {
	@Input() inputLabel: string = ''
	@Input() placeholder: string = ''
	@Input() inputName: string = ''
	@Input() inputType: InputType = 'text'

	value: string = ''
	onChange: (value: string) => void = () => {}
	onTouched: () => void = () => {}

	onInput(event: Event) {
		const value = (event.target as HTMLInputElement).value
		this.onChange(value)
	}

	writeValue(value: string): void {
		this.value = value
	}

	registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn
	}
}
