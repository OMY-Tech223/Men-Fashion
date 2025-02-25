import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // Add to cart icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon for the modal
import { useCart } from '../components/header/CartContext'; // Import the useCart hook

// Mock data for products (replace with data from your backend)
const products = [
    {
        id: 1,
        name: "Summer Dress",
        image: "./images/g.jpg",
        description: "Lightweight and stylish summer dress.",
        additionalImages: [
            "./images/OIF.jpeg",
            "./images/ss.jpg",
        ],
        oldPrice: "2,245.00 EGP", // Old price
        newPrice: "1,347.00 EGP", // New price
        sizes: ["M", "L", "XL", "XXL"], // Available sizes
    },
    {
        id: 2,
        name: "Beach Hat",
        image: "./images/OIF.jpeg",
        description: "Perfect for sunny days at the beach.",
        additionalImages: [
            "./images/OIF.jpeg",
            "./images/g.jpg",
        ],
        oldPrice: "1,500.00 EGP", // Old price
        newPrice: "1,200.00 EGP", // New price
        sizes: ["One Size"], // Available sizes
    },
    {
        id: 3,
        name: "Sunglasses",
        image: "./images/ss.jpg",
        description: "Trendy sunglasses for summer.",
        additionalImages: [
            "./images/ss.jpg",
            "./images/OIF.jpeg",
        ],
        oldPrice: "800.00 EGP", // Old price
        newPrice: "600.00 EGP", // New price
        sizes: ["One Size"], // Available sizes
    },
    {
        id: 4,
        name: "Flip Flops",
        image: "./images/flip-flops.jpg",
        description: "Comfortable flip flops for summer.",
        additionalImages: [
            "./images/flip-flops.jpg",
            "./images/g.jpg",
        ],
        oldPrice: "500.00 EGP", // Old price
        newPrice: "400.00 EGP", // New price
        sizes: ["S", "M", "L"], // Available sizes
    },
];

const Summer = () => {
    const theme = useTheme();
    const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product
    const [open, setOpen] = useState(false); // Control the modal open/close state
    const [selectedSize, setSelectedSize] = useState(null); // Track the selected size
    const { addToCart } = useCart(); // Use the useCart hook to access the addToCart function

    // Handle opening the modal
    const handleOpen = (product) => {
        setSelectedProduct(product);
        setSelectedSize(null); // Reset selected size when opening a new product
        setOpen(true);
    };

    // Handle closing the modal
    const handleClose = () => {
        setSelectedProduct(null);
        setSelectedSize(null); // Reset selected size when closing the modal
        setOpen(false);
    };

    // Handle selecting a size
    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    // Handle adding a product to the cart
    const handleAddToCart = (product) => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart."); // Prompt the user to select a size
            return;
        }
        const productWithSize = { ...product, selectedSize }; // Include the selected size in the product object
        addToCart(productWithSize); // Add the product to the cart
        alert(`${product.name} (Size: ${selectedSize}) added to cart!`); // Optional: Show a confirmation message
        handleClose(); // Close the modal
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${"./images/f.jpg"})`, // Set the background image
                backgroundSize: 'cover', // Ensure the image covers the entire page
                backgroundPosition: 'center', // Center the background image
                minHeight: '100vh', // Ensure the background covers the full viewport height
                py: 6, // Add padding to the top and bottom
            }}
        >
            <Container>
                {/* Title */}
                <Typography variant="h3" fontWeight="bold" align="center" sx={{ mb: 4, color: '#FFF', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
                    Summer Collection
                </Typography>

                {/* Product Cards */}
                <Grid container spacing={4}>
                    {products.map((product) => (
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
                                    cursor: 'pointer', // Change cursor to pointer on hover
                                }}
                                onClick={() => handleOpen(product)} // Open modal on click
                            >
                                {/* Product Image */}
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    alt={product.name}
                                    sx={{
                                        height: 300, // Fixed height for the image
                                        objectFit: 'cover', // Ensure the image fits the box
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
                                                textDecoration: 'line-through', // Add a dash (strikethrough) to the old price
                                                color: theme.palette.text.secondary, // Use a secondary color for the old price
                                                display: 'inline-block', // Ensure the old price and new price are on the same line
                                                mr: 1, // Add margin to the right
                                            }}
                                        >
                                            {product.oldPrice}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 'bold', // Make the new price bold
                                                color: theme.palette.primary.main, // Use the primary color for the new price
                                                display: 'inline-block', // Ensure the old price and new price are on the same line
                                            }}
                                        >
                                            {product.newPrice}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Product Details Modal */}
                {selectedProduct && (
                    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                        <DialogTitle>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Typography variant="h5" fontWeight="bold">
                                    {selectedProduct.name}
                                </Typography>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        </DialogTitle>
                        <DialogContent>
                            {/* Product Images */}
                            <Grid container spacing={2}>
                                {selectedProduct.additionalImages.map((image, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <CardMedia
                                            component="img"
                                            image={image}
                                            alt={`${selectedProduct.name} - Image ${index + 1}`}
                                            sx={{
                                                height: 200,
                                                width: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Product Description */}
                            <Typography variant="body1" sx={{ mt: 3 }}>
                                {selectedProduct.description}
                            </Typography>

                            {/* Price Display in Modal */}
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        textDecoration: 'line-through', // Add a dash (strikethrough) to the old price
                                        color: theme.palette.text.secondary, // Use a secondary color for the old price
                                        display: 'inline-block', // Ensure the old price and new price are on the same line
                                        mr: 1, // Add margin to the right
                                    }}
                                >
                                    {selectedProduct.oldPrice}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 'bold', // Make the new price bold
                                        color: theme.palette.primary.main, // Use the primary color for the new price
                                        display: 'inline-block', // Ensure the old price and new price are on the same line
                                    }}
                                >
                                    {selectedProduct.newPrice}
                                </Typography>
                            </Box>

                            {/* Size Selection */}
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Select Size:
                                </Typography>
                                <Box display="flex" gap={2}>
                                    {selectedProduct.sizes.map((size) => (
                                        <Button
                                            key={size}
                                            variant={selectedSize === size ? "contained" : "outlined"}
                                            onClick={() => handleSizeSelection(size)}
                                            sx={{
                                                minWidth: '40px', // Set a fixed width for size buttons
                                                fontWeight: 'bold',
                                                border: selectedSize === size ? '2px solid' : '1px solid',
                                                borderColor: theme.palette.primary.main,
                                                color: selectedSize === size ? '#FFF' : theme.palette.primary.main,
                                                backgroundColor: selectedSize === size ? theme.palette.primary.main : 'transparent',
                                                '&:hover': {
                                                    backgroundColor: theme.palette.primary.light,
                                                    color: '#FFF',
                                                },
                                            }}
                                        >
                                            {size}
                                        </Button>
                                    ))}
                                </Box>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddShoppingCartIcon />}
                                onClick={() => handleAddToCart(selectedProduct)} // Add to cart
                            >
                                Add to Cart
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </Container>
        </Box>
    );
};

export default Summer;