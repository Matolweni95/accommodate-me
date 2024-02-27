export const content = [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  "./src/**/*.{js,jsx,ts,tsx}",
  "./index.html",
];
export const theme = {
  colors: {
    'white': '#fff',
    'gray': '#d9d9d9',
    'lightgray': '#f6f7f9',
    'blue': '#0d63c9',
    'orange': '#f05747',
    'darkblue': '#0F0C63'
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      'nav': '88px',
      'masi': '380px',
      'subtext': '10px',
      'heropadding': '95px',
      'footer': '60px',
      'iconwidthmid': '60px',
      
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '13px',
      'base2': '14px',
      'md': '16px',
      'lg': '1.125rem',
      'xl': '0.9rem',
      '2xl': '0.278rem',
      '3xl': '1.3rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      // Add more custom sizes as needed
    },

    letterSpacing: {
      'tight': '-0.02em',
      'normal': '0',
      'wide': '0.06em',
      'extra': '2.06em',
    },
    
    width: {
      '2/4': '490px'
    }
  }
};