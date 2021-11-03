import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import content from './content';

const theme: DefaultTheme = {
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#003333',
	},
	mobile: '768px',
};

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					{content.map((item) => (
						<Card key={item.id} item={item} />
					))}
				</Container>
				<Footer />
			</>
		</ThemeProvider>
	);
};

export default App;
