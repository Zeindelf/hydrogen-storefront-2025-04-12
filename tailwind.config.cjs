import defaultTheme from 'tailwindcss/defaultTheme';

const {sans, serif} = defaultTheme.fontFamily;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  darkMode: ['class', '[class="dark"]', '[data-mode="dark"]'],
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements',
    }),
  ],
  theme: {
    container: {
      center: 'true',
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.1s ease-out',
        'accordion-up': 'accordion-up 0.1s ease-out',
        beat: 'beat cubic-bezier(0.04, 0.4, 0.5, 0.95) 1.2s forwards 1',
        'collapsible-down': 'accordion-down 0.2s ease-out',
        'collapsible-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      aspectRatio: {
        landscape: '9/16',
        portrait: '16/9',
        product: '4/5',
        sd: '3/4',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        focus: 'hsl(var(--focus))',
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
      },
      fontFamily: {
        heading: ['Margem', ...sans],
        sans: ['Margem', ...sans],
        serif: [...serif],
      },
      fontSize: {
        '2xl': ['1.5rem', {lineHeight: '2rem'}], // 24px
        '2xs': ['0.625rem', {lineHeight: '1rem'}], // 10px
        '3xl': ['1.875rem', {lineHeight: '2.25rem'}], // 30px
        '4xl': ['2.25rem', {lineHeight: '2.5rem'}], // 36px
        '5xl': ['3rem', {lineHeight: '1.25'}], // 48px
        '6xl': ['3.75rem', {lineHeight: '1.25'}], // 60px
        '7xl': ['4.5rem', {lineHeight: '1.25'}], // 72px
        '8xl': ['6rem', {lineHeight: '1.25'}], // 96px
        '9xl': ['8rem', {lineHeight: '1.25'}], // 128px
        base: ['1rem', {lineHeight: '1.5rem'}], // 16px
        lg: ['1.125rem', {lineHeight: '1.75rem'}], // 18px
        sm: ['0.875rem', {lineHeight: '1.25rem'}], // 14px
        xl: ['1.25rem', {lineHeight: '1.75rem'}], // 20px
        xs: ['0.75rem', {lineHeight: '1rem'}], // 12px
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
        beat: {
          '100%': {transform: 'scale(1)'},
          '30%': {transform: 'scale(1.4)'},
          '50%': {transform: 'scale(0.8)'},
        },
        'collapsible-down': {
          from: {height: 0},
          to: {height: 'var(--radix-collapsible-content-height)'},
        },
        'collapsible-up': {
          from: {height: 'var(--radix-collapsible-content-height)'},
          to: {height: 0},
        },
        marquee: {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(calc(-100% - var(--gap)))'},
        },
        'marquee-vertical': {
          from: {transform: 'translateY(0)'},
          to: {transform: 'translateY(calc(-100% - var(--gap)))'},
        },
      },
      maxWidth: {
        '2xs': '16rem', // 256px
        '8xl': '90rem', // 1440px
      },
      screens: {
        '2xl': '96rem', // 1536px
        lg: '64rem', // 1024px
        md: '48rem', // 768px
        sm: '40rem', // 640px
        xl: '80rem', // 1280px
        xs: '30rem', // 480px
      },
      spacing: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.625rem',
      },
    },
    zIndex: {
      1: '1',
    },
  },
};
