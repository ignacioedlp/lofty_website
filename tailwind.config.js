/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      heading: '#03162D',
      body1: '#243B53',
      body2: '#486581',
      icon: '#486581',
      textlink: '#BCCCDC',
      line: '#D9E2EC',
      background: '#F5F7FA',
      attention: '#FF9500',
      positive: '#34C759',
      negative: '#FF3B30',
      hosting: '#FF3B30',
      amenities: '#D743C4',
      services: '#32D74B',
      external: '#5E5CE6',
      rewards: '#FFCC00',
    },
    fontFamily: {
      avenir: ['AVENIR'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
