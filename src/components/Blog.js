import {Box} from '@mui/material';

const Blog = () => {
    return (
        <Box sx={{width: '100%', height: '100vh', border: '1px solid #ccc', marginLeft: '200px', overflowY: 'auto', paddingTop: 10, '@media (max-width: 600px)': {width: '100%', height: '100vh', marginLeft: "0"}}}>
            <iframe
                src="https://subhashydv.github.io/"
                title="Blog"
                width="100%"
                height="100%"
                style={{border: 'none'}}
            />
        </Box>

    );
}

export default Blog