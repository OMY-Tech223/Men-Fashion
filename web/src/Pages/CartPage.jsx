import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import the close (x) icon
import { useCart } from '../components/header/CartContext'; // Import the useCart hook

const CartPage = () => {
    const theme = useTheme();
    const { cart, removeFromCart } = useCart(); // Access the cart state and removeFromCart function

    // Function to generate the WhatsApp message
    const generateWhatsAppMessage = () => {
        // Get customer data from localStorage (assuming you store it there after login)
        const customerData = JSON.parse(localStorage.getItem('userData')) || {};

        // Create a list of products in the cart with images, names, sizes, and prices
        const productList = cart.map((product) => (
            `📦 *${product.name}* (Size: ${product.selectedSize})\n` +
            `💰 Price: ${product.newPrice}\n` +
            `----------------------------`
        )).join('\n');

        // Create the final message
        const message = `Hello, I want to buy the following products:\n\n${productList}\n\nMy details:\n` +
            `👤 Name: ${customerData.username}\n` +
            `📧 Email: ${customerData.email}\n` +
            `📞 Phone: ${customerData.phone}\n` +
            `🏠 Address: ${customerData.addressLine1}, ${customerData.addressLine2}`;

        // Encode the message for the WhatsApp URL
        return encodeURIComponent(message);
    };

    // Function to handle the "Buy Now" button click
    const handleBuyNow = () => {
        const message = generateWhatsAppMessage();
        const phoneNumber = "+201003193883"; // Replace with the company's phone number in international format

        // Check if the user is on a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // Create the WhatsApp URL
        let whatsappUrl;
        if (isMobile) {
            // Use the wa.me link for mobile devices
            whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        } else {
            // Use the web.whatsapp.com link for desktop devices
            whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        }

        // Open the WhatsApp URL
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(web/src/Pages/cart-bg.jpg)`, // Set a background image (optional)
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                py: 6,
            }}
        >
            <Container>
                {/* Title */}
                <Typography variant="h3" fontWeight="bold" align="center" sx={{ mb: 4, color: theme.palette.text.primary }}>
                    Your Cart
                </Typography>

                {/* Display cart products */}
                {cart.length === 0 ? (
                    <Typography variant="h5" align="center" sx={{ color: theme.palette.text.secondary }}>
                        Your cart is empty.
                    </Typography>
                ) : (
                    <>
                        <Grid container spacing={4}>
                            {cart.map((product) => (
                                <Grid item xs={12} sm={6} md={4} key={product.id}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderRadius: '8px',
                                            boxShadow: theme.shadows[3],
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            },
                                            position: 'relative', // For positioning the delete icon
                                        }}
                                    >
                                        {/* Delete Icon */}
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => removeFromCart(product.id)} // Remove the product from the cart
                                            sx={{
                                                position: 'absolute',
                                                top: '8px',
                                                right: '8px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 0, 0, 0.8)', // Red background on hover
                                                },
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>

                                        {/* Product Image */}
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            alt={product.name}
                                            sx={{
                                                height: 200,
                                                objectFit: 'cover',
                                            }}
                                        />

                                        {/* Product Details */}
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6" fontWeight="bold">
                                                {product.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                                {product.description}
                                            </Typography>

                                            {/* Price Display */}
                                            <Box sx={{ mt: 2 }}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        textDecoration: 'line-through',
                                                        color: theme.palette.text.secondary,
                                                        display: 'inline-block',
                                                        mr: 1,
                                                    }}
                                                >
                                                    {product.oldPrice}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.primary.main,
                                                        display: 'inline-block',
                                                    }}
                                                >
                                                    {product.newPrice}
                                                </Typography>
                                            </Box>

                                            {/* Selected Size */}
                                            <Box sx={{ mt: 2 }}>
                                                <Typography variant="body2" color="text.secondary">
                                                    Selected Size: {product.selectedSize}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Buy Now Button at the bottom of the page */}
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={handleBuyNow} // Redirect to WhatsApp
                                sx={{
                                    fontSize: '1.2rem',
                                    padding: '12px 24px',
                                }}
                            >
                                Buy Now
                            </Button>
                        </Box>
                    </>
                )}
            </Container>
        </Box>
    );
};

export default CartPage;