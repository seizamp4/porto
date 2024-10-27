Halo semua! saya membuat repositori ini untuk menyimpan proyek ini!

### Instalasi Tailwind CSS

baca docs di [tailwind CSS](https://tailwindcss.com/docs/installation) atau lihat di bawah ini
Install `tailwindcss` via npm, and create your `tailwind.config.js` file.

```
npm install -D tailwindcss
npx tailwindcss init
```

# Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
