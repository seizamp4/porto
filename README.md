Halo semua! saya membuat repositori ini untuk menyimpan proyek ini!
baca docs di [tailwind CSS](https://tailwindcss.com/docs/installation) atau lihat di bawah ini!

# Install Tailwind CSS
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

# Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Start the Tailwind CLI build process

Run the CLI tool to scan your template files for classes and build your CSS.
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

# Start using Tailwind in your HTML

Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
