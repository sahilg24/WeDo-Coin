import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';

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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

const WedoWalletBody = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                py={{ xs: 29.4 }}
                bgcolor="secondary.main"

            >

                <Box sx={{ bgcolor: 'background.paper', width: 800, height: 200 }} m="auto">
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Balance" {...a11yProps(0)} />
                            <Tab label="Swap" {...a11yProps(1)} />
                            <Tab label="Send" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} >
                            Your Balance
                        </TabPanel>
                        <TabPanel value={value} index={1} >
                            Swap to
                        </TabPanel>
                        <TabPanel value={value} index={2} >
                            Send to
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </Box>
        </ThemeProvider>
    );
};
export default WedoWalletBody;
