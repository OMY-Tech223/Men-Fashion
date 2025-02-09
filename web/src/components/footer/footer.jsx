import { Box, Button, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
        sx={{

            bgcolor:"#2B3445",
            py:1.3,
            borderTopLeftRadius:8,
            borderTopRightRadius:8,
        }}
    >
        <Typography
        justifyContent={"center"}
        display={"Flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant='h6'
        sx={{fontSize:18}}
        >
            Designed and developed by
            <Button
            sx={{
                mx:0.5,
                fontSize:"18px",
                textTransform:"capitalize",
                color:"#ff7790"
            }}
            variant='text'
            color='primary'
            >
                Omar Ehab 
            </Button>

            ©2025
        </Typography>
    </Box>    
    );
}

export default Footer;