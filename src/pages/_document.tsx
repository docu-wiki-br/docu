/* Dependencies */
import Document, {
	Head,
	Html,
	Main,
	DocumentProps,
	NextScript,
} from 'next/document'

export default class MyDocument extends Document<DocumentProps> {
	render() {
		return (
			<>
				<Html lang={'pt-BR'}>
					<Head>
						<link
							rel={'shortcut icon'}
							href={'/assets/favicon.ico'}
							type={'image/x-icon'}
						/>
						<link
							rel={'manifest'}
							href={'manifest.json'}
						/>
					</Head>
					<body>
						<Main />
						<section className={'modal-container'} />
						<NextScript />
					</body>
				</Html>
			</>
		)
	}
}
