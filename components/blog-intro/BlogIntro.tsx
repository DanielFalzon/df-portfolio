import { Box, Typography } from '@mui/material';

interface BlogIntroProps {
  title: string;
  content: string;
}

const BlogIntro = ({ title, content }: BlogIntroProps) => {
  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom sx={{ 
        fontSize: '2.5rem',
        fontWeight: 'bold',
        mb: 2
      }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.primary">
        {content}
      </Typography>
    </Box>
  );
};

export default BlogIntro; 