import {Box} from '@mui/material';

const Blog = () => {
    return (
        <Box sx={{width: '100%', height: '100vh', border: '1px solid #ccc'}}>
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