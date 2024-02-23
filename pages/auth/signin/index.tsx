/* Dependencies */
import Link from 'next/link'
import { useState } from 'react'

/* Project */
import Logo from '@components/Logo'
import style from './index.module.scss'
import Button from '@components/Button'
import Input from '@components/Input'

export default function SignIn() {
	const [signUp, setSignup] = useState<boolean>(false)

	function handleForgotPassword() {
		alert('Ops!')
	}

	function handleSignin() {
		setSignup(!signUp)
	}

	return (
		<>
			<div className={style.container}>
				<div className={style.logo}>
					<Logo
						color={'white'}
						display={'vertical'}
					/>
				</div>
				<div className={style.right}>
					{signUp ? (
						<div>
							<h1>{`Sign Up`}</h1>
							<p>{'Create your account'}</p>
							<div className={style.divider} />
							<div className={style.fields}>
								<Input
									id={'email'}
									label={'Email'}
									type={'text'}
								/>
								<Input
									id={'name'}
									label={'Name'}
									type={'text'}
								/>
								<Input
									id={'password'}
									label={'Password'}
									type={'password'}
								/>
								<Input
									id={'password'}
									label={'Confirm password'}
									type={'password'}
								/>
								<Button>{'Sign Up'}</Button>
							</div>
							<div className={style.divider} />
							<div className={style.actions}>
								<div>
									<a onClick={handleSignin}>{'Do you have an account?'}</a>
								</div>
							</div>
						</div>
					) : (
						<div>
							<h1>{`Sign In`}</h1>
							<p>{'Sign in to your account to continue'}</p>
							<div className={style.divider} />
							<div className={style.fields}>
								<Input
									id={'email'}
									label={'Email'}
									type={'text'}
								/>
								<Input
									id={'password'}
									label={'Password'}
									type={'password'}
								/>
								<Button>{'Sign In'}</Button>
							</div>
							<div className={style.divider} />
							<div className={style.actions}>
								<div>
									<a onClick={handleSignin}>{"Don't have an account?"}</a>
								</div>
								<div>
									<a onClick={handleForgotPassword}>
										{'Forgot your password?'}
									</a>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
