import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, Box, useMediaQuery } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { CartProvider } from "./components/header/CartContext"; // Import CartProvider

import Header2 from "./components/header/Header2";
import Hero from "./components/hero/Hero";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import ConfirmPage from "./components/header/ConfirmPage";
import ManageAccount from "./components/header/ManageAccount";
import Summer from './Pages/Summer';
import Casual from './Pages/casual';
import Winter from './Pages/Winter';
import Shoe from './Pages/Shoe';
import CartPage from './Pages/CartPage'; // Import the CartPage

function App() {
  const [theme, colorMode] = useMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile devices
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Detect tablet devices

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Wrap the entire application with CartProvider */}
        <CartProvider>
          <BrowserRouter>
            <Header2 />
            <Box bgcolor={theme.palette.bg.main}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero isMobile={isMobile} isTablet={isTablet} />
                      <Main isMobile={isMobile} isTablet={isTablet} />
                    </>
                  }
                />
                <Route path="/confirm" element={<ConfirmPage isMobile={isMobile} isTablet={isTablet} />} />
                <Route path="/manage-account" element={<ManageAccount isMobile={isMobile} isTablet={isTablet} />} />
                <Route path="/summer" element={<Summer isMobile={isMobile} isTablet={isTablet} />} />
                <Route path="/casual" element={<Casual isMobile={isMobile} isTablet={isTablet} />} />
                <Route path="/winter" element={<Winter isMobile={isMobile} isTablet={isTablet} />} />
                <Route path="/shoe" element={<Shoe isMobile={isMobile} isTablet={isTablet} />} />
                <Route path="/cart" element={<CartPage isMobile={isMobile} isTablet={isTablet} />} /> {/* Add the CartPage route */}
              </Routes>
            </Box>
            <Footer isMobile={isMobile} isTablet={isTablet} />
            <ScrollToTop />
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;