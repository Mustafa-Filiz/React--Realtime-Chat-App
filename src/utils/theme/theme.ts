export interface Theme {
    colors: {
        primary: string;
        secondary: string;
        white: string;
        black: string;
        gray: string;
        lightGray: string;
        darkGray: string;
        lightBlue: string;
        darkBlue: string;
        lightGreen: string;
        darkGreen: string;
    },
    fontSizes: {
        small: string;
        medium: string;
        large: string;
        xlarge: string,
        xxlarge: string,
    },
    sizes: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
    },
}

export const theme: Theme = {
    colors: {
        primary: '#5B86E6',
        secondary: '#E76268',
        white: '#fff',
        black: '#000',
        gray: '#9e9e9e',
        lightGray: '#f5f5f5',
        darkGray: '#616161',
        lightBlue: '#9BBBFC',
        darkBlue: '#4741A6',
        lightGreen: '#C0E6BA',
        darkGreen: '#4CA771',
    },
    fontSizes: {
        small: '14px',
        medium: '16px',
        large: '18px',
        xlarge: '20px',
        xxlarge: '22px',
    },
    sizes: {
        small: '5px',
        medium: '10px',
        large: '15px',
        xlarge: '20px',
        xxlarge: '4rem',
    }
}