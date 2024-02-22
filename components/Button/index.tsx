/* Project */
import style from './index.module.scss'
import { ButtonProps } from './types'

export default function Button(props: ButtonProps) {
	const { className, ...rest } = props

	const classNames = [style.container, className].join(' ')

	return (
		<>
			<button
				{...rest}
				className={classNames}
			/>
		</>
	)
}
