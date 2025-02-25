import { Box, Button, Typography, Grid, Link, IconButton, Container } from '@mui/material'; // Import Container
import FacebookIcon from '@mui/icons-material/Facebook'; // Social media icons
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "#2B3445",
                py: 4,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                color: "white",
            }}
        >
            <Container maxWidth="lg"> {/* Use the Container component */}
                <Grid container spacing={4}>
                    {/* Brand Section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "24px",
                                mb: 2,
                                color: "#ff7790",
                            }}
                        >
                            OMY
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Your one-stop destination for the latest trends and styles.
                        </Typography>
                        <Box>
                            <IconButton
                                aria-label="Facebook"
                                href="https://facebook.com"
                                target="_blank"
                                sx={{ color: "white" }}
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Twitter"
                                href="https://twitter.com"
                                target="_blank"
                                sx={{ color: "white" }}
                            >
                                <TwitterIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Instagram"
                                href="https://instagram.com"
                                target="_blank"
                                sx={{ color: "white" }}
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                aria-label="LinkedIn"
                                href="https://linkedin.com"
                                target="_blank"
                                sx={{ color: "white" }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Link href="/about" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                            About Us
                        </Link>
                        <Link href="/contact" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                            Contact Us
                        </Link>
                        <Link href="/privacy-policy" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" color="inherit" underline="none" sx={{ display: "block", mb: 1 }}>
                            Terms & Conditions
                        </Link>
                    </Grid>

                    {/* Contact Info Section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                            Contact Info
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Email: support@omy.com
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Phone: +201003193883
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Address: 123 Main St, Cairo, Egypt
                        </Typography>
                    </Grid>

                    {/* Newsletter Section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                            Newsletter
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Subscribe to our newsletter for the latest updates.
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: "8px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    flex: 1,
                                    marginRight: "8px",
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#ff7790",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#ff5a7a",
                                    },
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright Section */}
                <Box
                    sx={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        mt: 4,
                        pt: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2">
                        © 2025 OMY. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;