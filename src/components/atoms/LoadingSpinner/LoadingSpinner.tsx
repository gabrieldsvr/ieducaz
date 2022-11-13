import * as React from 'react';
import {CircularProgress, Container, Grid} from "@mui/material";

export const LoadingSpinner = () => {

    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{p: 5}}>

                <CircularProgress/>
            </Grid>
        </Container>
    );
}