import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginInuptLayoutComponent } from './login-input-layout.component'

describe('LoginInuptLayoutComponent', () => {
	let component: LoginInuptLayoutComponent
	let fixture: ComponentFixture<LoginInuptLayoutComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginInuptLayoutComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(LoginInuptLayoutComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
