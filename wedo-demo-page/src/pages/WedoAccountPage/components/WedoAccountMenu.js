import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

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

const WedoAccountMenu = () => {

    return (
        <ThemeProvider theme={theme}>
            <Grid container
                alignItems="center">
                <Grid item xs={2.5}>
                    <Box bgcolor="primary.main"
                        minHeight="100vh"
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            pt={4}
                            sx={{
                                ml: 2,
                                mb: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            WeDo.coin
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon
                                        sx={{
                                            color: 'white',
                                        }}>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard"
                                        sx={{
                                            color: 'white',
                                        }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemIcon
                                        sx={{
                                            color: 'white',
                                        }}>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="About WeDo"
                                        sx={{
                                            color: 'white',
                                        }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemIcon
                                        sx={{
                                            color: 'white',
                                        }}>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Link"
                                        sx={{
                                            color: 'white',
                                        }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemIcon
                                        sx={{
                                            color: 'white',
                                        }}>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Link"
                                        sx={{
                                            color: 'white',
                                        }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemIcon
                                        sx={{
                                            color: 'white',
                                        }}>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Help"
                                        sx={{
                                            color: 'white',
                                        }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>

                <Grid item xs={9.5}>
                    <Box
                        bgcolor="secondary.main"
                        minHeight="100vh"
                    >
                        <Box ml={120}
                            pt={4}>
                            <Button variant="contained"
                            >Create an account</Button></Box>
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '30rem', marginLeft: 'auto', marginRight: 'auto' }}>
                            <Typography
                                variant="h3"
                                pt={10}
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    color: 'white',
                                }}
                            >
                                Log in to your Wedo.coin account
                            </Typography></div>
                    </Box>

                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
export default WedoAccountMenu;
