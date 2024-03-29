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
    'lightbg': '#f1f5f9',
    'blue': '#0d63c9',
    'lightblue': '#51C4FF',
    'orange': '#f05747',
    'darkblue': '#0F0C63',
    'discovertext': '#515B6D',
    "dark-purple": "#081A51",
    "light-white": "rgba(255,255,255,0.17)",
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
      'sm': '13px',
      'base': '15px',
      'base2': '14px',
      'md': '20px',
      'lg': '1.125rem',
      'xl': '0.9rem',
      '2xl': '0.98rem',
      '3xl': '1.3rem',
      '4xl': '2rem',
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