import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

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

const WedoFooter = () => {

    return (
        // Footer
        <ThemeProvider theme={theme}>
            <Box
                py={{ xs: 2, sm: 4 }}
                bgcolor="primary.main"
                color="white">
                <Container maxWidth="xl" >
                    <Typography
                        pb={2}
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',

                        }}
                    >
                        WeDo.coin
                    </Typography>

                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Forum</Box>
                            <Box><Link href="/" color="inherit">Sub-content-1</Link></Box>
                            <Box><Link href="/" color="inherit">Sub-content-2</Link></Box>
                            <Box><Link href="/" color="inherit">Sub-content-3</Link></Box>
                            <Box><Link href="/" color="inherit">Sub-content-4</Link></Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Support</Box>
                            <Box><Link href="/" color="inherit">Sub-content-1</Link></Box>
                            <Box><Link href="/" color="inherit">Sub-content-2</Link></Box>
                            <Box><Link href="/" color="inherit">Sub-content-3</Link></Box>
                            <Box><Link href="/" color="inherit">Sub-content-4</Link></Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>About</Box>
                            <Box><Link href="/" color="inherit">Sub-content-1</Link></Box>
                            <Box><Link href="/" color="inherit">Sub-content-2</Link></Box>
                            <Box><Link href="/" color="inherit">Sub-content-3</Link></Box>
                            <Box><Link href="/" color="inherit">Sub-content-4</Link></Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
};
export default WedoFooter;
