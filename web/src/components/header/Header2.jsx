import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  Badge,
  Container,
  Stack,
  InputBase,
  IconButton,
  useTheme,
  Menu,
  MenuItem,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useContext, useEffect } from "react"; // Add useEffect
import { useNavigate } from "react-router-dom";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../../theme";
import { useCart } from "./CartContext"; // Import the useCart hook

// Import both logos
const  lightLogo= "./images/Black_White_Minimalist_Initials_Monogram_Jewelry_Logo-removebg-preview.png";
const darkLogo = "./images/Black_White_Minimalist_Initials_Monogram_Jewelry_Logo__1_-removebg-preview.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header2 = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
  });
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupAddress, setSignupAddress] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Use the useCart hook to access cart state and addToCart function
  const { cart, addToCart } = useCart();

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
      setIsLoggedIn(true);
    }
  }, []);

  // Handle menu open/close
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle login/signup
  const handleLoginClick = () => {
    setLoginOpen(true);
    handleMenuClose();
  };

  const handleSignupClick = () => {
    setSignupOpen(true);
    handleMenuClose();
  };

  const handleLogin = () => {
    const userData = {
      username: "JohnDoe",
      email: loginEmail,
      phone: "123-456-7890",
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
    };
    localStorage.setItem("userData", JSON.stringify(userData)); // Store user data
    setUserData(userData);
    setIsLoggedIn(true);
    setLoginOpen(false);
  };

  const handleSignup = async () => {
    if (signupPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword,
          phone: signupPhone,
          address: signupAddress,
        }),
      });

      if (response.ok) {
        alert("Please check your email to confirm your account.");
        setSignupOpen(false);
      } else if (response.status === 409) {
        setEmailError("Email already exists");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userData"); // Clear user data from localStorage
    handleMenuClose();
  };

  const handleManageAccount = () => {
    console.log("Redirecting to manage account page"); // Debugging
    navigate("/manage-account");
    handleMenuClose();
  };

  // Handle logo click to return to the main page
  const handleLogoClick = () => {
    navigate("/");
  };

  // Handle search
  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await fetch(`http://localhost:3000/search?query=${searchQuery}`);
        const data = await response.json();

        if (data.length > 0) {
          // Redirect to a search results page or display results
          navigate("/search-results", { state: { results: data } });
        } else {
          setSnackbarMessage("Not Found!");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error("Error during search:", error);
        setSnackbarMessage("An error occurred. Please try again.");
        setSnackbarOpen(true);
      }
    }
  };

  // Close snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <img
          src={theme.palette.mode === "light" ? lightLogo : darkLogo}
          alt="Logo"
          style={{ height: "40px", cursor: "pointer" }}
          onClick={handleLogoClick} // Redirect to main page on logo click
        />
      </Stack>

      <Search
        sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch} // Trigger search on Enter key
        />
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          {theme.palette.mode === "light" ? (
            <DarkModeOutlined sx={{ fontSize: "16px", color: theme.palette.text.primary }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "16px", color: theme.palette.text.primary }} />
          )}
        </IconButton>

        {/* Cart Icon */}
        <IconButton aria-label="cart" onClick={() => navigate("/cart")}> {/* Navigate to CartPage */}
          <StyledBadge badgeContent={cart.length} color="secondary"> {/* Display cart count */}
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton onClick={handleMenuOpen}>
          <Person2OutlinedIcon />
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ mt: 1 }}>
          {isLoggedIn ? (
            <div>
              <MenuItem disabled>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {userData.username}
                </Typography>
              </MenuItem>
              <MenuItem disabled>
                <Typography variant="body2">{userData.email}</Typography>
              </MenuItem>
              <MenuItem disabled>
                <Typography variant="body2">{userData.phone}</Typography>
              </MenuItem>
              <MenuItem onClick={handleManageAccount}>
                <Typography variant="body2">Manage Account</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography variant="body2" sx={{ color: "red" }}>
                  Logout
                </Typography>
              </MenuItem>
            </div>
          ) : (
            <div>
              <MenuItem onClick={handleLoginClick}>
                <Typography variant="body2">Login</Typography>
              </MenuItem>
              <MenuItem onClick={handleSignupClick}>
                <Typography variant="body2">Signup</Typography>
              </MenuItem>
            </div>
          )}
        </Menu>
      </Stack>

      {/* Login Dialog */}
      <Dialog open={loginOpen} onClose={() => setLoginOpen(false)}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLoginOpen(false)}>Cancel</Button>
          <Button onClick={handleLogin}>Login</Button>
        </DialogActions>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={signupOpen} onClose={() => setSignupOpen(false)}>
        <DialogTitle>Signup</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="tel"
            fullWidth
            value={signupPhone}
            onChange={(e) => setSignupPhone(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            value={signupAddress}
            onChange={(e) => setSignupAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSignupOpen(false)}>Cancel</Button>
          <Button onClick={handleSignup}>Signup</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Not Found message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Header2;