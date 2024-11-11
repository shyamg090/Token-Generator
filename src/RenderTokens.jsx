import {
    Grid,
    Box,
} from '@mui/material';

const RenderTokens = ({tokens, color, tokensPerRow}) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${tokensPerRow}, 80px)`,
                gap: '30px',
            }}
        >
            {tokens.map((token, index) => (
                <Grid item xs={12 / tokensPerRow} key={index}>

                    <Box
                        sx={{
                            backgroundColor: `${color}`,
                            width: '5rem',
                            height: '5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: '5px',
                            color: 'white',
                            // margin: 'auto', // Centers the box within the grid item
                        }}
                    >
                        {token}
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default RenderTokens