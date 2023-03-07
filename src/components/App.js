import React, { useState } from "react";
import { authService } from "fbase";
import AppRouter from "components/Router";

function App() {
  const [isLoggedIn, setIsLoggedin] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Twitter </footer>
    </>
  );
}

export default App;
