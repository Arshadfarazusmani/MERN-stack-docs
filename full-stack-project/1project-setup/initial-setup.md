# project setup

### creating frontend project using vite 

``` 
npm create vite@latest frontend -- --template react 
```
this will create initialise a react project 

### configuring tailwind css

- install Tailwind css
```
cd frontend
npm install tailwindcss @tailwindcss/vite
```
-> cd frontend -> vite.config.js 
```
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
-> cd frontend -> src -> app.css
```
@import "tailwindcss";
```

## initialising backend 
step1
main directory 

```
npm init -y 
 ```
this will initialise node project 


