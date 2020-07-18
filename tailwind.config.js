module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily:{
        "Poppins" : ["Poppins"],
        'sans': ['-apple-system', 'BlinkMacSystemFont', ],
    'serif': ['Georgia', 'Cambria'],
    'mono': ['SFMono-Regular', 'Menlo', ],
      },
      borderWidth: {
        default: '1px',
        '0': '0',
        '2': '2px',
            '3': '3px',
        '4': '4px',
     '6': '6px',
       '8': '8px',
       '32':"32px",
       '64':"64px",
       'full':"100%"
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl:'1rem',
        '2xl':'2rem',
        '3xl':'3rem',
        '4xl':'4rem',

        full: '9999px',
      },
      zIndex: {
        '0': 0,
       '10': 10,
      '20': 20,
       '30': 30,
    '40': 40,
       '50': 50,
       '0.1':'-10',
       '0.2':'-20',

    },
    opacity: {
      '0': '0',
      '10':'.10',
      '15':'.15',
     '25': '.25',
     '50': '.5',
     '75': '.75',
     '1':'1',
    },
  },
},
  variants: {},
  plugins: [],
}
