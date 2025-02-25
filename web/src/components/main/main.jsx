import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';

const Main = () => {
    const theme = useTheme();
    const navigate = useNavigate(); // Hook for navigation

    // Data for the four photos
    const collections = [
        {
            title: "Summer Collection",
            image: "./images/2.jpg",
            path: "/summer", // Path to the Summer collection page
        },
        {
            title: "Casual Collection",
            image: "./images/1.jpg",
            path: "/casual", // Path to the Casual collection page
        },
        {
            title: "Shoe Collection",
            image: "./images/4.jpg",
            path: "/shoe", // Path to the Shoe collection page
        },
        {
            title: "Winter Collection",
            image: "./images/3.jpg",
            path: "/winter", // Path to the Winter collection page
        },
    ];

    // Data for the three boxes
    const features = [
        {
            icon: <BoltOutlinedIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
            title: "Fast Delivery",
            description: "We deliver your orders quickly and efficiently.",
        },
        {
            icon: <QueryBuilderOutlinedIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
            title: "15 Days for Free Return",
            description: "Not satisfied? Return your order within 15 days for free.",
        },
        {
            icon: <CreditScoreOutlinedIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
            title: "Secure Payment",
            description: "Your payments are safe and secure with us.",
        },
    ];

    return (
        <Container id="main-section" sx={{ py: 9 }}>
            {/* Big Box with Four Photos */}
            <Box sx={{ width: '100%', mt: 4 }}>
                <Grid container spacing={4}>
                    {collections.map((collection, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            {/* Small Box with Photo and Text */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 300,
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    boxShadow: theme.shadows[3],
                                    '&:hover img': {
                                        transform: 'scale(1.1)',
                                        transition: 'transform 0.3s ease',
                                    },
                                    cursor: 'pointer', // Change cursor to pointer on hover
                                }}
                                onClick={() => navigate(collection.path)} // Navigate on click
                            >
                                {/* Photo */}
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />

                                {/* Text Overlay */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        textAlign: 'center',
                                        color: '#FFF',
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                                    }}
                                >
                                    <Typography variant="h5" fontWeight="bold">
                                        {collection.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Three Centered Boxes */}
            <Box sx={{ width: '100%', mt: 8, textAlign: 'center' }}>
                <Grid container spacing={4} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    p: 3,
                                    borderRadius: '8px',
                                    border: `2px solid ${theme.palette.primary.main}`,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Low transparency
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                {/* Icon */}
                                {feature.icon}

                                {/* Title */}
                                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                                    {feature.title}
                                </Typography>

                                {/* Description */}
                                <Typography variant="body1" sx={{ mt: 1 }}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Blog and Certificates Section */}
            <Box sx={{ width: '100%', mt: 8, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
                    Blog & Certificates
                </Typography>

                {/* Blog Section */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                        Latest Blog Posts
                    </Typography>
                    <Typography variant="body1">
                        Stay updated with our latest news and articles.
                    </Typography>
                    {/* Blog Posts */}
                    <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                        {[
                            {
                                title: "Summer Collection Trends 2025",
                                description: "Discover the latest trends in our Summer Collection. From vibrant colors to lightweight fabrics, we’ve got you covered for the sunny season.",
                            },
                            {
                                title: "Casual Collection: Style Meets Comfort",
                                description: "Explore our Casual Collection, where style meets comfort. Perfect for everyday wear, these pieces are designed to keep you looking great effortlessly.",
                            },
                            {
                                title: "Shoe Collection: Step in Style",
                                description: "Step up your fashion game with our Shoe Collection. From sneakers to formal shoes, find the perfect pair for every occasion.",
                            },
                        ].map((post, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: '8px',
                                        boxShadow: theme.shadows[3],
                                        backgroundColor: theme.palette.background.paper,
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1 }}>
                                        {post.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Certificates Section */}
                <Box>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                        Our Certificates
                    </Typography>
                    <Typography variant="body1">
                        We are proud to be certified for our high-quality collections.
                    </Typography>
                    {/* Certificates */}
                    <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                        {[
                            {
                                title: "Eco-Friendly Summer Collection",
                                description: "Our Summer Collection is certified eco-friendly, using sustainable materials and ethical production practices.",
                            },
                            {
                                title: "Casual Collection Quality Certification",
                                description: "The Casual Collection has been awarded for its high-quality materials and craftsmanship.",
                            },
                            {
                                title: "Shoe Collection Comfort Certification",
                                description: "Our Shoe Collection is certified for its exceptional comfort and durability.",
                            },
                        ].map((certificate, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: '8px',
                                        boxShadow: theme.shadows[3],
                                        backgroundColor: theme.palette.background.paper,
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold">
                                        {certificate.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1 }}>
                                        {certificate.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Main;