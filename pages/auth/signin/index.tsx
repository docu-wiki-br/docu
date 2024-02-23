/* Dependencies */
import Link from 'next/link'

/* Project */
import Logo from '@components/Logo'
import style from './index.module.scss'
import Button from '@components/Button'
import Input from '@components/Input'

function handleSignin() {}

export default function SignIn() {
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
					<div>
						<h1>{'Sign In'}</h1>
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
							<Button onClick={handleSignin}>{'Sign In'}</Button>
						</div>
						<div className={style.divider} />
						<div className={style.actions}>
							<div>
								<Link href={'auth/signup'}>{"Don't have an account?"}</Link>
							</div>
							<div>
								<Link href={'auth/forgot'}>{'Forgot your password?'}</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
