import React, { useState } from 'react';
import {
    TextField,
    Button,
    Grid2,
    Container,
    Typography,
    Box,
    Stack,
} from '@mui/material';

import RenderTokens from './RenderTokens';

const TokenGenerator = () => {

    const [blueTokenSettings, setBlueTokenSettings] = useState({
        blueTokenCount: null,
        bluePrefix: '',
        blueTokensPerRow: null
    })

    const handleBlueTokenChange = (e) => {

        setBlueTokenSettings((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

    };

    const [redTokenSettings, setRedTokenSettings] = useState({
        redTokenCount: null,
        redPrefix: '',
        redTokensPerRow: null
    })

    const handleRedTokenChange = (e) => {

        setRedTokenSettings((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

    };

    const [blueTokens, setBlueTokens] = useState([]);
    const [redTokens, setRedTokens] = useState([]);

    const handleGenerate = (e) => {

        e.preventDefault();

        const size = parseInt(blueTokenSettings.blueTokenCount, 10);
        console.log(size);

        const blueTokenList = new Array(size).fill(null).map((_, i) => {
            return `${blueTokenSettings.bluePrefix}${i + 1}`
        });

        console.log("blueTokenSettings", blueTokenSettings);
        setBlueTokens(blueTokenList);

        console.log(blueTokenList);

        const redTokenList = new Array(parseInt(redTokenSettings.redTokenCount, 10)).fill(null).map((_, i) => {
            return `${redTokenSettings.redPrefix}${i + 1}`
        });
        setRedTokens(redTokenList);

    };

    const handleClear = () => {
        setBlueTokenSettings({});
        setRedTokenSettings({});
        setBlueTokens([]);
        setRedTokens([]);
    }

    return (
        <Container maxWidth='md' sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Token Generator - Assignment
            </Typography>
            <Stack spacing={3}>
          
                <Grid2 item xs={12}>
                    <TextField
                        fullWidth
                        required
                        name='blueTokenCount'
                        label="Number of blue tokens"
                        type="number"
                        variant='outlined'
                        value={blueTokenSettings.blueTokenCount}
                        onChange={handleBlueTokenChange}
                    />
                </Grid2>
                <Grid2 item xs={12}>
                    <TextField
                        fullWidth
                        required
                        name='bluePrefix'
                        label="Prefix for blue tokens"
                        value={blueTokenSettings.bluePrefix}
                        onChange={handleBlueTokenChange}
                    />
                </Grid2>
                <Grid2 item xs={12}>
                    <TextField
                        fullWidth
                        required
                        name='blueTokensPerRow'
                        label="Blue tokens per row"
                        type="number"
                        value={blueTokenSettings.blueTokensPerRow}
                        onChange={handleBlueTokenChange}
                    />
                </Grid2>

        
                <Grid2 item xs={12}>
                    <TextField
                        fullWidth
                        required
                        name='redTokenCount'
                        label="Number of red tokens"
                        type="number"
                        value={redTokenSettings.redTokenCount}
                        onChange={handleRedTokenChange}
                    />
                </Grid2>
                <Grid2 item xs={12}>
                    <TextField
                        fullWidth
                        required
                        name='redPrefix'
                        label="Prefix for red tokens"
                        value={redTokenSettings.redPrefix}
                        onChange={handleRedTokenChange}
                    />
                </Grid2>
                <Grid2 item xs={12}>
                    <TextField
                        fullWidth
                        required
                        name='redTokensPerRow'
                        label="Red tokens per row"
                        type="number"
                        value={redTokenSettings.redTokensPerRow}
                        onChange={handleRedTokenChange}
                    />
                </Grid2>

    
                <Stack direction='row' gap={3} xs={12}>
                    <Button variant="contained" color="primary" onClick={handleGenerate}>
                        Generate
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleClear}>
                        Clear
                    </Button>
                </Stack>
            </Stack>


            <Box mt={6}>
                <RenderTokens tokens={blueTokens} color={'blue'} tokensPerRow={blueTokenSettings.blueTokensPerRow} />
            </Box>

            <Box my={6}>
                <RenderTokens tokens={redTokens} color={'red'} tokensPerRow={redTokenSettings.redTokensPerRow} />
            </Box>
        </Container>
    );
};

export default TokenGenerator;
