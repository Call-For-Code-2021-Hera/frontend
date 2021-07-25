import { purple } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles'

const primaryColor = '#14A2D7';

export const DefaultTheme = createTheme({

    typography: {
        fontFamily: "'Montserrat', sans-serif",
    },
    palette: {
        primary: {
            main: '#398E95',
            contrastText: '#FAFAFA',
        }
    },
});