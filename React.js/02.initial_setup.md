# Build a React app from Scratch

### Step 1: Install a build tool 
The first step is to install a build tool like vite, parcel, or rsbuild. These build tools provide features to package and run source code, provide a development server for local development and a build command to deploy your app to a production server.

## Vite 
Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

```bash
npm create vite@latest my-app -- --template react
```
# Tailwind setup 

```bash
npm install tailwindcss @tailwindcss/vite
```

vite.config

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),react()
  ],
})

```


```css
@import "tailwindcss";
```