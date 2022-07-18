import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

const pages = ['Forum', 'Support', 'About'];
const settings = ["Profile", "Wallet", "Logout"];

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

const WedoWalletHeader = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const [open1, setOpen1] = React.useState(false);
    const anchorRef1 = React.useRef(null);

    const handleToggle1 = () => {
        setOpen1((prevOpen1) => !prevOpen1);
    };

    const handleClose1 = (event) => {
        if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
            return;
        }

        setOpen1(false);
    };

    const [open2, setOpen2] = React.useState(false);
    const anchorRef2 = React.useRef(null);

    const handleToggle2 = () => {
        setOpen2((prevOpen2) => !prevOpen2);
    };

    const handleClose2 = (event) => {
        if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
            return;
        }

        setOpen2(false);
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    const prevOpen1 = React.useRef(open1);
    const prevOpen2 = React.useRef(open2);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    React.useEffect(() => {
        if (prevOpen1.current === true && open1 === false) {
            anchorRef1.current.focus();
        }

        prevOpen1.current = open1;
    }, [open1]);

    React.useEffect(() => {
        if (prevOpen2.current === true && open2 === false) {
            anchorRef2.current.focus();
        }

        prevOpen2.current = open2;
    }, [open2]);


    return (
        // HEADER
        <AppBar position="static">
            <ThemeProvider theme={theme}>
                <Container maxWidth="xl" sx={{ bgcolor: 'primary.main' }}>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
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

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'flex' }, justifyContent: "center" }}>
                            <div>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    ref={anchorRef}
                                    id="composition-button"
                                    aria-controls={open ? "composition-menu" : undefined}
                                    aria-expanded={open ? "true" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                >
                                    Forum
                                </Button>

                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement="top-start"
                                    transition
                                    disablePortal
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === "top-start" ? "left top" : "left bottom"
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                    >
                                                        <MenuItem onClick={handleClose}>Sub-content-1</MenuItem>
                                                        <MenuItem onClick={handleClose}>Sub-content-2</MenuItem>
                                                        <MenuItem onClick={handleClose}>Sub-content-3</MenuItem>
                                                        <MenuItem onClick={handleClose}>Sub-content-4</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>

                            <div>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    ref={anchorRef1}
                                    id="composition-button"
                                    aria-controls={open1 ? "composition-menu" : undefined}
                                    aria-expanded={open1 ? "true" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle1}
                                >
                                    Support
                                </Button>

                                <Popper
                                    open={open1}
                                    anchorEl={anchorRef1.current}
                                    role={undefined}
                                    placement="top"
                                    transition
                                    disablePortal
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === "top" ? "left top" : "left bottom"
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose1}>
                                                    <MenuList
                                                        autoFocusItem={open1}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                    >
                                                        <MenuItem onClick={handleClose1}>Sub-content-1</MenuItem>
                                                        <MenuItem onClick={handleClose1}>Sub-content-2</MenuItem>
                                                        <MenuItem onClick={handleClose1}>Sub-content-3</MenuItem>
                                                        <MenuItem onClick={handleClose1}>Sub-content-4</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>

                            <div>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    ref={anchorRef2}
                                    id="composition-button"
                                    aria-controls={open2 ? "composition-menu" : undefined}
                                    aria-expanded={open2 ? "true" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle2}
                                >
                                    About
                                </Button>

                                <Popper
                                    open={open2}
                                    anchorEl={anchorRef2.current}
                                    role={undefined}
                                    placement="top-end"
                                    transition
                                    disablePortal
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === "top-end" ? "left top" : "left bottom"
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose2}>
                                                    <MenuList
                                                        autoFocusItem={open2}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                    >
                                                        <MenuItem onClick={handleClose2}>Sub-content-1</MenuItem>
                                                        <MenuItem onClick={handleClose2}>Sub-content-2</MenuItem>
                                                        <MenuItem onClick={handleClose2}>Sub-content-3</MenuItem>
                                                        <MenuItem onClick={handleClose2}>Sub-content-4</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open Account Management">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </ThemeProvider>
        </AppBar>

    );
};
export default WedoWalletHeader;
