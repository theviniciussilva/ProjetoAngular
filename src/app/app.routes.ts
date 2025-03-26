import { Routes } from '@angular/router'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { SignupPageComponent } from './pages/signup-page/signup-page.component'
import { UserComponent } from './pages/user/user.component'
import { AuthGuard } from './services/auth-guard.service'

export const routes: Routes = [
	{
		path: '',
		component: LoginPageComponent,
	},
	{
		path: 'login',
		component: LoginPageComponent,
	},
	{
		path: 'signup',
		component: SignupPageComponent,
	},
	{
		path: 'user',
		component: UserComponent,
		canActivate: [AuthGuard],
	},
]
