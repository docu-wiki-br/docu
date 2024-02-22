export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Unique identifier for the input
	 */
	id: HTMLInputElement['id']
	/**
	 * Label for the input
	 */
	label: string
	/**
	 * Type of the input
	 * @default text
	 */
	type?: HTMLInputElement['type']
}
