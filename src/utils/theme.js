const multiplierUnit = 4;

const theme = {
	colors: {
		backgroundColor: {
			default: '#FAFAFA',
			paper: '#FFFFFF',
		},
		primary: {
			main: '#0A57A2',
			light: '#408EDB',
			dark: '#06315C'
		},
		success: {
			main: '#27AE60',
			light: '#6DDE9C',
			dark: '#096E33'
		},
		error: {
			main: '#C23616',
			light: '#CC593F',
			dark: '#701A07'
		},
		info: {
			main: '##1ABC9C',
			light: '#85F2DD',
			dark: '#075747'
		},
		warning: {
			main: '#FF6348',
			light: '#FA9C8C',
			dark: '#9E3A29'
		},
		grey: {
			main: '#57606f',
			light: '#040404',
			ultralight: '#D2D4D6',
			dark: '#303640',
		},
		common: {
			light: '#FFFFFF',
			dark: '#000000',
			grey: '#57606F',
		},
	},
	shape: {
		radius: (value) => value * multiplierUnit,
		spacing: (value) => value * multiplierUnit,
	}
};

export default theme;