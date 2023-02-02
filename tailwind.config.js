/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          "blue": "#03045E",
          "blue-v2" : "#023E8A",
          "blue-v3" : "#0077B6",
          "blue-v4" : "#0096C7",
          "blue-v5" : "#00B4D8",
          "blue-v6" : "#CCF0F7",
          "orange" : "#FF5400",
          "orange-v1" : "#FF6D00",
          "orange-v2" : "#FF8500",
          "orange-v3" : "#FF9100",
          "orange-v4" : "#FF9E00",
        },
        spacing: {
          '30': '7.25rem',
          '26' : '6.65rem',
          '27' : '6.80rem',
          '100' : '26rem',
          '104' : '28rem',
          '106' : '30rem',
          '108' : '32rem',
          '112' : '36rem'
        },
        backgroundImage: {
          'our-blog': "url('')",
        },
        rotate: {
          '60': '60deg',
        }
      },
    },
    plugins: [require('@tailwindcss/line-clamp')],
  }