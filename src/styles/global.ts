import { createGlobalStyle } from 'styled-components';
import theme from './theme' 

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		background: #FDFDFD;
		color: #121212;
		-webkit-font-smoothing: antialiased;
		overflow-x: hidden;
	}

	body, input, button, small {
		font-family: 'Poppins', sans-serif;
		font-size: 16px;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 700;
	}

	button, a {
		cursor: pointer;
		p{
			cursor: pointer;
		}
	}

	p{
		cursor: default;
	}

	//modal animations

	.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
}

	.ReactModal__Overlay--after-open{
		opacity: 1;
	}

	.ReactModal__Overlay--before-close{
		opacity: 0;
	}

	//scrollbar
		div{
			::-webkit-scrollbar {
				height: 8px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			border-radius: 5px;
			background: ${theme.colors.cardBackground};
  	}

		/* Handle */
		::-webkit-scrollbar-thumb {
      background: ${theme.colors.grey};
      border-radius: 5px;
      transition: 0.6;
  	}

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.dark};
      cursor: pointer;
  	}
	}
`;
