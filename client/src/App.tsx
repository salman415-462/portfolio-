import { ThemeProvider } from "@/components/theme-provider";
import Portfolio from "@/pages/portfolio";
import { useEffect } from "react";

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    try {
      const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
      if (measurementId) {
        // Add Google Analytics script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script1);

        // Initialize gtag
        const script2 = document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `;
        document.head.appendChild(script2);
      }
    } catch (error) {
      console.error('Error initializing analytics:', error);
    }
  }, []);

  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
