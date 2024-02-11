/* Project */
import type { Pages } from '../../types'
import styles from './index.module.scss'

function Container({ children }: Pages.Props) {
	return (
		<>
			<section className={styles.container}>{children}</section>
		</>
	)
}

export default Container
