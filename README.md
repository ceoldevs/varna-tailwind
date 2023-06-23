# CEOL's Varṇa Tailwind

A color scheme library for tailwind to populate colors in 
extended themes.

A seed value in hsl will be taken as input and the Hue 
determines the color and lightness determines the tones in
the palette.

The saturation helps in generating colors to light and dark
modes differently.

## Usage

```javascript
/** @type {import('tailwindcss').Config} */

const colors = require('@ceol/varna')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Just one line of code to be added. HSL values
      colors: colors(205,24,40)
    }
  },
  plugins: [],
}
```
