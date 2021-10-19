import { defineConfig } from 'windicss/helpers'
import AspectRatio from 'windicss/plugin/aspect-ratio'
import LineClamp from 'windicss/plugin/line-clamp'
// import Filters from 'windicss/plugin/filters'
// import Forms from 'windicss/plugin/forms'
// import ScrollSnap from 'windicss/plugin/scroll-snap'
// import Typography from 'windicss/plugin/typography'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#0d6efd',
        secondary: '#6c757d',
        success: ' #198754 ',
        info: '#0dcaf0',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#212529'
      },
      screens: {
        // 'p280'  : '280px',
        // 'p320'  : '320px',
        // 'p360'  : '360px',
        // 'p375'  : '375px',
        // 'p411'  : '411px',
        // 'p414'  : '414px',
        // 'p540'  : '540px',
        'sm'    : '640px',
        'md'    : '768px',
        'lg'    : '1024px',
        'xl'    : '1280px',
        '2xl'   : '1536p',
        'print' : {'raw': 'print'},
        'screen': {'raw': 'screen'},
      },
    },
  },
  plugins: [
    AspectRatio,
    LineClamp,
    // Filters,
    // Forms,
    // ScrollSnap,
    // Typography
  ],
})
