import { Typography, useTheme } from '@mui/material';
import { tokens } from 'src/theme';

type DashboardHeaderProps = {
  title: string;
  subTitle?: string;
};
export const DashboardHeader = ({ title, subTitle }: DashboardHeaderProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
        {title}
      </Typography>
      {subTitle && (
        <Typography variant='body1' color={colors.grey[200]}>
          {subTitle}
        </Typography>
      )}
    </>
  );
};
