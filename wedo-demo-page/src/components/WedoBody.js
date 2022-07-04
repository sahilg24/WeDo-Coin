import * as React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
                    <Grid item xs={7}>
                        <Stack spacing={0}>
                            <Skeleton sx={{ bgcolor: 'primary.main' }} variant="text" height={150} />
                            <Skeleton sx={{ bgcolor: 'primary.main' }} variant="rectangular" height={250} />
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
