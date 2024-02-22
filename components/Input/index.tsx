/* Project */
import style from './index.module.scss'
import { InputProps } from './types'

export default function Input(props: InputProps) {
	const { className, label, type = 'text', ...rest } = props

	const classNames = [style.container, className].join(' ')

	return (
		<>
			<div className={classNames}>
				<label htmlFor={rest.id}>{label}</label>
				<input
					{...rest}
					type={type}
				/>
			</div>
		</>
	)
}
