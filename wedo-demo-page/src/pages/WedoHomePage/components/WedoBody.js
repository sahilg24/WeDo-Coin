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
                            
                            <h1 className="section-title" style = {{color : "white"}}>
                                <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="rectangular" height={50} width = {750}>
                                    WeDo.coin: A Measure of Academic Capital
                                    <ul>
                                    The credits on the hs.credit platform are gold standard high school credits which distinguish a student who earns them 
                                    </ul>
                                </Skeleton>
                            </h1>
                            <h4 style = {{color : "white"}}>
                                
                                <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="rectangular" height={75} width = {750}>
                                The credits on the hs.credit platform are gold standard high school credits which distinguish a student who earns them                                                        
                                </Skeleton>

                                <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="rectangular" height={75} width = {750}>
                                Ultimately, the purpose of the hs.credit platform is to mint units of Academic Capital which offer a measure of the platform’s impact 
                                </Skeleton>

                                <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="rectangular" height={75} width = {750}>
                                WeDo.coin issuance is how academic capital is measured—at its core, WeDo.coin is a governance token issued to student leaders on the hs.credit platform
                                </Skeleton>


                                
                            </h4>

                            <h1 className="section-title" style = {{color : "white"}}>
                                <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="rectangular" height={50} width = {750}>
                                What is Academic Capital?
                                </Skeleton>
                            </h1>

                            <h4 style = {{color : "white"}}>
                                
                                <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="rectangular" height={75} width = {750}>
                                We define Academic capital as an approved credit on the hs.credit platform which, together with other such credits satisfy an anti-bias criteria.                                                        
                                </Skeleton>

                                <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="rectangular" height={75} width = {750}>
                                Such a group of diverse credits together form a block of academic capital, minted on the WeDo.coin blockchain once every three months.
                                </Skeleton>

                                <Skeleton animation="wave" sx={{ bgcolor: deepPurple[200] }} variant="rectangular" height={75} width = {750}>
                                Students whose work is included in such a block earn a reward of tokens issued monthly to their wallet for 25 years from the time the block is first minted.
                                </Skeleton>


                                
                            </h4> 
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
