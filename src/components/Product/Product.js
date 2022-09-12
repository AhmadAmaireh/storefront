import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Product.css'

import {connect} from 'react-redux';
import {activeCatagory, reset} from '../../app/productReducer';

function Product(props) {
    // console.log(props.data)
    const products = () => (props.data.map((product, idx) => {
        return (
                <Grid item xs={2} sm={4} md={4} >
                    < Card key={idx} sx={{
                        maxWidth: 345
                    }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt="product image" style={{width:350, height:200}}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="">
                                {product.displayName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">VIEW DETAILS</Button>
                        </CardActions>
                    </Card>
                </Grid>
        )
    }))
    // console.log('ppppppppp',props);
    return (
        <>
            <h2>{props.data[0].categoryAssociation}</h2>
            <div className='container'>
            <Grid container spacing={{ xs: 1, md: 5}} columns={{ xs: 4, sm: 8, md: 12 }} style={{
                                    display: 'flex'
                                }}>
                {products()}
            </Grid>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({data: state.productReducer.products})

const mapDispatchToProps = {
    activeCatagory,
    reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);