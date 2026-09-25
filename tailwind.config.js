/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        // Tokens que trocam com o tema (definidos em index.css via CSS vars)
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        'bg-soft': 'rgb(var(--color-bg-soft) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        // Faixa permanentemente escura (ex: seção Projetos), fixa nos dois temas
        ink: '#05070D',
        'ink-soft': '#0F1424',
        // Cores da marca (fixas, vêm da logo)
        brand: {
          cyan: '#22D3EE',
          blue: '#3B82F6',
          purple: '#8B5CF6',
          pink: '#C084FC',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-18px,0) scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,14px,0) scale(0.97)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        floatSlow: 'floatSlow 13s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
