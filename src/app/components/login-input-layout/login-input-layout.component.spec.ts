import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginInputLayoutComponent } from './login-input-layout.component'

describe('LoginInuptLayoutComponent', () => {
	let component: LoginInputLayoutComponent
	let fixture: ComponentFixture<LoginInputLayoutComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginInputLayoutComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(LoginInputLayoutComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
