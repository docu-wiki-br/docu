/* Dependencies */
import type { InferGetServerSidePropsType } from 'next'

/* Project */
import Container from '@/components/Container'
import CopyRight from '@/components/CopyRight'
import Logo from '@/components/Logo'
import styles from './index.module.scss'

export default function UnderContruction(
	props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
	return (
		<Container>
			<header className={styles.header}>
				<Logo
					color={'white'}
					display={'horizontal'}
				/>
			</header>
			<section className={styles.container}>
				<div>
					<h1 className={styles.title}>
						{'🚧 Ainda estamos trabalhando nessa página 🚧'}
					</h1>
					<p className={styles.subtitle}>
						{
							'Não se preocupe, vai ficar pronta antes de você piscar as pregas!'
						}
					</p>
				</div>
				<div>
					<p className={styles.message}>{props.message}</p>
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

export function getServerSideProps() {
	const messages = [
		'"Docu.wiki.br" ainda não está pronto, mas quando estiver, vai ser mais reluzente do que o cu do C-3PO!',
		'"Docu.wiki.br" ainda não está pronto, mas quando estiver, você vai poder cagar argumentos!',
		'"Docu.wiki.br" ainda não está pronto, mas quando estiver, vai fazer cair o cu da bunda!',
	]

	const message = messages[Math.floor(Math.random() * messages.length)]

	return {
		props: {
			message,
		},
	}
}
