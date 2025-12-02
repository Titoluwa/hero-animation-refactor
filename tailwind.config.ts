// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 1.8s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 1.8s ease-out 1.3s forwards',
        'fade-in-up-delay-2': 'fadeInUp 1.8s ease-out 1.6s forwards',
        'slide-in-left': 'slideInLeft 1.8s ease-out forwards',
        'slide-in-left-delay-1': 'slideInLeft 1.8s ease-out 1.3s forwards',
        'slide-in-left-delay-2': 'slideInLeft 1.8s ease-out 1.6s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
}