import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize AOS when the app loads
if (typeof window !== 'undefined') {
  import('aos').then((AOS) => {
    AOS.default.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
