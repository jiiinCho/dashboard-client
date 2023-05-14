import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

type ProgressCircleProps = {
  progress?: number;
  size?: string;
};

export const ProgressCircle = ({
  progress = 0.75,
  size = '60',
}: ProgressCircleProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  const backgroundColor =
    theme.palette.mode === 'dark' ? colors.grey[700] : colors.grey[900];

  const accentColor =
    theme.palette.mode === 'dark'
      ? colors.greenAccent[500]
      : colors.greenAccent[400];

  return (
    <Box
      sx={{
        background: `radial-gradient(${backgroundColor} 40%, transparent 40%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.primary[500]} ${angle}deg 360deg),
            ${accentColor}`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
