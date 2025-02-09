import { Box, Container, Stack, Typography, useTheme, Button, Rating,Dialog } from '@mui/material';
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Close from '@mui/icons-material/Close'; 
import IconButton from '@mui/material/IconButton';
import ProductDetails from './ProductDetails';

const Main = () => {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <Container sx={{ py: 9 }}>
            <Stack direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                gap={3}>

                <Box>
                    <Typography variant='h6'>Selected Products</Typography>
                    <Typography fontWeight={300} variant='body1'>
                        All our new arrivals in a exclusive brand selection
                    </Typography>
                </Box>

                <ToggleButtonGroup
                    color="error"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        ".Mui-selected": {
                            border: "1px solid rgba(233,69,96,0.5) !important",
                            color: "#e94560",
                            backgroundColor: "initial"
                        },
                    }}
                >
                    <ToggleButton sx={{
                        borderRadius: "5px  !important",
                        border: "1px solid #888 !important",
                        textTransform: "capitalize !important",
                        paddingTop: "7px !important",
                        paddingBottom: "7px !important",
                        fontSize: "16px !important",
                        color: theme.palette.text.primary,
                    }} value="left" aria-label="left aligned">
                        All Products
                    </ToggleButton>


                    <ToggleButton sx={{
                        borderRadius: "5px !important",
                        border: "1px solid #888 !important",
                        textTransform: "capitalize !important",
                        paddingTop: "7px !important",
                        paddingBottom: "7px !important",
                        fontSize: "16px !important",
                        mx: "16px !important",
                        color: theme.palette.text.primary,
                    }} value="center" aria-label="centered">
                        MEN category
                    </ToggleButton>


                    <ToggleButton sx={{
                        borderRadius: "5px !important",
                        border: "1px solid #888 !important",
                        textTransform: "capitalize !important",
                        paddingTop: "7px !important",
                        paddingBottom: "7px !important",
                        fontSize: "16px !important",
                        color: theme.palette.text.primary,
                    }} value="right" aria-label="right aligned">
                        WOMEN category
                    </ToggleButton>

                </ToggleButtonGroup>

            </Stack>




            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>

                {["sss","ddd"].map((item) => {
                    return(
                        <Card key={item} sx={{ maxWidth: 333, mt: 6,":hover .MuiCardMedia-root": {rotate:"1deg", scale:"1.1", transition:"0.35s"} }}>
                    <CardMedia
                        sx={{ height: 277 }}
                        image="static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />




                    <CardContent>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Typography gutterBottom variant='h6' component="div">
                                T-shirt
                            </Typography>

                            <Typography variant='subtitle' component="p">
                                $12.99
                            </Typography>
                        </Stack>

                        <Typography variant='body2' color='text.secondary'>
                            Lizards are a widespread group of squamate reptiles, with
                            over 6,000 species, ranging across all continents except
                            Antarctica
                        </Typography>

                    </CardContent>




                    <CardActions sx={{ justifyContent: "space-between" }}>
                        <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }} size="large">
                            <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize='small' />
                            add to cart
                        </Button>
                        <Rating precision={0.1} name="read-only" value={3.25} readOnly />
                    </CardActions>
                </Card>
                    )
                })}

            </Stack>








            <Dialog
            sx={{".MuiPaper-root":{minWidth:{xs:"100%",md:800}}}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
<IconButton sx={{
    ":hover":{color:"red",rotate:"180deg", transition:"0.3s"}, 
    position: "absolute", 
    top: 0, 
    right: 10 }} 
    onClick={handleClose}>
            <Close />
          </IconButton>
          
          
          
       <ProductDetails />
      </Dialog>


        </Container>
    );
}

export default Main;