# Portable Exported Sections

This folder contains the **Lamborghini Support** and **AI Food Analysis** sections extracted from the Hydro project. They are designed to be "plug-and-play" in any React + Tailwind CSS project.

## How to use in your new project:

1.  **Copy the folder**: Copy the entire `exported-sections` folder into your new project's `src` directory (or wherever you keep components).
2.  **Install dependencies**: Run the following command in your new project:
    ```bash
    npm install framer-motion lucide-react clsx tailwind-merge tailwindcss-animate @radix-ui/react-slot class-variance-authority
    ```
3.  **Tailwind Configuration**: Make sure your `tailwind.config.js` includes the following:
    ```javascript
    module.exports = {
      darkMode: ["class"],
      content: ["./src/**/*.{ts,tsx}"], // Adjust according to your folder structure
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
            accent: {
              DEFAULT: "hsl(var(--accent))",
              foreground: "hsl(var(--accent-foreground))",
            },
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
        },
      },
      plugins: [require("tailwindcss-animate")],
    }
    ```
4.  **CSS Variables**: Copy the contents of `styles/globals.css` into your main CSS file (e.g., `index.css` or `globals.css`).
5.  **Import and Use**:
    ```tsx
    import LamborghiniSection from './exported-sections/components/LamborghiniSection';
    import AIAnalysisSection from './exported-sections/components/AIAnalysisSection';

    function App() {
      return (
        <main>
          <AIAnalysisSection />
          <LamborghiniSection />
        </main>
      );
    }
    ```

## Folder Structure:
- `components/`: The main section components.
- `ui/`: Shared UI components (Button, Card).
- `lib/`: Utility functions (cn).
- `assets/`: Image assets used in the sections.
- `styles/`: CSS variables and base styles.
