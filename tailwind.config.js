/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-navbar': 'var(--color-bg-navbar)',
        'bg-footer': 'var(--color-bg-footer)',
        'bg-card': 'var(--color-bg-card)',
        'bg-form': 'var(--color-bg-form)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-navbar': 'var(--color-text-navbar)',
        accent: 'var(--color-accent)',
        'link-accent': 'var(--color-link-accent)',
        'link-accent-hover': 'var(--color-link-accent-hover)',
        'accent-hover': 'var(--color-accent-hover)',
        'button-primary': 'var(--color-button-primary)',
        'button-secondary': 'var(--color-button-secondary)',
        'border-custom': 'var(--color-border)',
      },
    },
  },
  plugins: [],
}
