const config = {
	content: [
	  "./src/**/*.{html,js,svelte,ts,jpg}",
	  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	  "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
	],
  
	plugins: [
	  require('flowbite/plugin')
	],
  
	darkMode: 'class',
	
	theme: {
		extend: {
		  colors: {
			"primary": "#f3f4f6 ",
			"secondary": "#0c0a09",
			"ternary": "#2563eb",
			"accent": "#e2e8f0"
		  },
		
		  spacing: {
			'1': '0.25rem',  // 4px
			'2': '0.5rem',   // 8px
			'3': '0.75rem',  // 12px
			'4': '1rem',     // 16px
			'5': '1.25rem',  // 20px
			'6': '1.5rem',   // 24px
			'8': '2rem',     // 32px
			'10': '2.5rem',  // 40px
			'12': '3rem',    // 48px
			'16': '4rem',    // 64px
			'20': '5rem',    // 80px
			'24': '6rem',    // 96px
			'32': '8rem',    // 128px
			'40': '10rem',   // 160px
		  },
		  fontSize: {
			'xs': '0.75rem', // 12px
			'sm': '0.875rem', // 14px
			'base': '1rem',  // 16px
			'lg': '1.125rem', // 18px
			'xl': '1.25rem', // 20px
			'2xl': '1.5rem', // 24px
			'3xl': '1.875rem', // 30px
			'4xl': '2.25rem', // 36px
			'5xl': '3rem',   // 48px
		  },
		  fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			mono: ['Courier New', 'monospace'],
		  },
		  boxShadow: {
			'golden': '0 4px 6px rgba(255, 223, 0, 0.3), 0 1px 3px rgba(255, 223, 0, 0.3)', // Sombra dorada suave
			'highlight': '0 2px 8px rgba(255, 223, 0, 0.5)', // Sombra de resaltado dorado
		  },
		  borderWidth: {
			'1': '1px', 
			'2': '2px',
			'4': '4px',
		  },
		  
		},
	  },


  };
  
  module.exports = config;
  