/* Dependencies */
import { useRouter } from 'next/navigation'

/* Project */
import Container from '@components/Container'
import CopyRight from '@components/CopyRight'
import Logo from '@components/Logo'
import styles from './index.module.scss'

export default function Page404() {
	/* Hooks */
	const router = useRouter()

	return (
		<Container>
			<header className={styles.header}>
				<Logo
					onClick={() => {
						router.push('/')
					}}
					color={'white'}
					display={'horizontal'}
				/>
			</header>
			<section className={styles.container}>
				<div>
					<h1 className={styles.title}>
						{'Oh não. Não encontramos nada nos nossos DOCUmentos. '}
					</h1>
					<p className={styles.message}>
						{'Aparentemente você está MERDOLANDO em terras desconhecidas.'}
					</p>
				</div>
				<div>
					<p className={styles.message}>{'Erro 404: Página não encontrada.'}</p>
				</div>
			</section>
			<footer className={styles.footer}>
				<Logo
					color={'white'}
					display={'vertical'}
				/>
				<CopyRight />
			</footer>
		</Container>
	)
}
