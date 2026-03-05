# Styles Reference for Exported Sections

To make these sections look exactly as they do in the original project, you'll need the following configurations.

## 1. Tailwind CSS Configuration (`tailwind.config.js`)

Add these extensions to your `theme` object:

```javascript
module.exports = {
  // ... rest of your config
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

## 2. CSS Variables (`globals.css` or `index.css`)

Ensure your base styles include these variables (using the Dark Blue theme from the original):

```css
@layer base {
  :root {
    --background: 230 25% 7%;
    --foreground: 210 40% 96%;

    --card: 230 25% 11%;
    --card-foreground: 210 40% 96%;

    --primary: 225 73% 57%;
    --primary-foreground: 0 0% 100%;

    --muted: 230 20% 18%;
    --muted-foreground: 215 20% 55%;

    --border: 230 20% 18%;
    --input: 230 20% 18%;
    --ring: 225 73% 57%;

    --radius: 0.75rem;

    --lambo-accent: 40 90% 50%;
  }
}
```

## 3. Dependencies

Make sure to install these packages in your new project:

```bash
npm install framer-motion lucide-react clsx tailwind-merge tailwindcss-animate
```

## 4. Components Note

The `LamborghiniSection` uses a `Button` component. You should either:
1.  Use [shadcn/ui Button](https://ui.shadcn.com/docs/components/button)
2.  Or replace the `Button` import with a standard `<button>` tag and style it with Tailwind.
