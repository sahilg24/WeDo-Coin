import * as React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { deepPurple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#805dbe'
        },
        secondary: {
            main: '#333333'
        }
    }
})

const WedoBody = () => {

    return (
        <ThemeProvider theme={theme}>
            <Box
                py={{ xs: 4 }}
                bgcolor="secondary.main"
            >
                <Grid container spacing={12}
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item xs={5.8}>
                        <Stack spacing={0}>
                            <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="text" height={150} />
                            <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="rectangular" height={250} />
                        </Stack>
                    </Grid>
                    <Grid item xs={5}>
                        <Button variant="contained" size="large" endIcon={<KeyboardArrowRightIcon />}>
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};
export default WedoBody;
