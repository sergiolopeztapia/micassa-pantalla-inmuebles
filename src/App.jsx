import { useEffect, useRef, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import { RotationContext } from "./RotationContext";
import initLogo from "./assets/micassa-logo-init.png";

const PAGES = ["/1", "/2", "/3", "/4"];
const ROTATION_MS = 5000;
const INITIAL_LOADING_MS = 5000;

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = Math.max(PAGES.indexOf(location.pathname), 0);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const remainingRef = useRef(ROTATION_MS);
  const startRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), INITIAL_LOADING_MS);
    return () => clearTimeout(timer);
  }, []);

  // Reset the countdown budget whenever the page actually changes.
  useEffect(() => {
    remainingRef.current = ROTATION_MS;
  }, [location.pathname]);

  useEffect(() => {
    if (isLoading || paused) return undefined;
    startRef.current = Date.now();
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % PAGES.length;
      navigate(PAGES[nextIndex]);
    }, remainingRef.current);
    return () => {
      clearTimeout(timer);
      remainingRef.current = Math.max(
        remainingRef.current - (Date.now() - startRef.current),
        0,
      );
    };
  }, [location.pathname, paused, currentIndex, isLoading, navigate]);

  const togglePause = () => setPaused((value) => !value);

  if (isLoading) {
    return (
      <main className="initial-loader" aria-label="Cargando MiCasa">
        <div className="initial-loader__content">
          <img className="initial-loader__logo" src={initLogo} alt="MiCasa" />
          <div className="initial-loader__progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </main>
    );
  }

  return (
    <RotationContext.Provider
      value={{
        current: currentIndex + 1,
        total: PAGES.length,
        durationMs: ROTATION_MS,
        paused,
        togglePause,
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
      </Routes>
    </RotationContext.Provider>
  );
}

export default App;
