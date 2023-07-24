import WordGame from "./pages/WordGame";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { ROUTES } from "./utils/static";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.START}
          element={<Navigate to={ROUTES.GAME} replace />}
        />
        <Route path={ROUTES.GAME} element={<WordGame />} />
        <Route
          path="*"
          element={
            <p>
              Page not found! Go to <Link to={ROUTES.GAME}>Word Game</Link>
            </p>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
