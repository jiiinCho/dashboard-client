import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from 'src/theme';

type HeaderProps = {
  title: string;
  subTitle: string;
};
export const Header = ({ title, subTitle }: HeaderProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb='30px'>
      <Typography
        variant='h2'
        color={colors.grey[100]}
        fontWeight='bold'
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
      <Typography variant='h6' color={colors.grey[100]}>
        {subTitle}
      </Typography>
    </Box>
  );
};
