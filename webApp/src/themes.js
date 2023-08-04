import { createTheme, alpha, getContrastRatio, } from '@mui/material/styles';

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);
export const theme = createTheme({
    palette: {
        primary: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
        custom: {
            elevatedBox: {
                backgroundColor: '#f0f0f0', 
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
            },
        },
    },
});