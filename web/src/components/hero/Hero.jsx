import { Box, Container, Typography, Button, useTheme } from '@mui/material';

const mySlider = [
    { text: "MEN FASHION", link: "./images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg" },
];

const Hero = ({ isMobile, isTablet }) => {
    const theme = useTheme();

    // Function to handle smooth scrolling to the main section
    const scrollToMainSection = () => {
        const mainSection = document.getElementById('main-section');
        if (mainSection) {
            mainSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Responsive styles
    const heroHeight = isMobile ? 300 : isTablet ? 400 : 600;
    const titleFontSize = isMobile ? '2rem' : isTablet ? '3rem' : '4rem';
    const subtitleFontSize = isMobile ? '1.5rem' : isTablet ? '2rem' : '3rem';
    const shippingFontSize = isMobile ? '1rem' : '1.5rem';
    const buttonFontSize = isMobile ? '0.875rem' : '1rem';

    return (
        <Container disableGutters maxWidth={false} sx={{ px: 0 }}>
            <Box sx={{ width: '100%', mt: 2.5 }}>
                {/* Display only the first photo without Swiper */}
                <Box sx={{ position: 'relative', width: '100%', height: heroHeight }}>
                    <img
                        src={mySlider[0].link}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                            width: '100%',
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#F6E8FF",
                                fontSize: titleFontSize,
                                fontWeight: 'bold',
                                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                            }}
                            variant='h1'
                        >
                            LIFESTYLE COLLECTION
                        </Typography>

                        <Typography
                            sx={{
                                color: "#F6E8FF",
                                fontSize: subtitleFontSize,
                                fontWeight: 'bold',
                                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                                mt: 2,
                            }}
                            variant='h2'
                        >
                            {mySlider[0].text}
                        </Typography>

                        {/* "Get Free Shipping" text without border/box */}
                        <Typography
                            sx={{
                                color: "#F6E8FF",
                                fontSize: shippingFontSize,
                                fontWeight: 500,
                                mt: 2,
                            }}
                            variant='body1'
                        >
                            Get Free Shipping on orders over $99.00
                        </Typography>

                        {/* "View Collection" Button */}
                        <Box
                            sx={{
                                mt: 2,
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                onClick={scrollToMainSection}
                                sx={{
                                    px: isMobile ? 3 : 4,
                                    py: 1,
                                    fontSize: buttonFontSize,
                                    fontWeight: 'bold',
                                    color: '#F6E8FF',
                                    border: '2px solid #F6E8FF',
                                    borderRadius: '4px',
                                    backgroundColor: 'rgba(246, 232, 255, 0.2)', // Low transparency
                                    '&:hover': {
                                        backgroundColor: 'rgba(246, 232, 255, 0.4)', // Slightly more transparency on hover
                                    },
                                }}
                            >
                                View Collection
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Hero;