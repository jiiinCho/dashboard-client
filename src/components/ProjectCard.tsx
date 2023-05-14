import { Box, IconButton, Typography, useTheme } from '@mui/material';

import { tokens } from 'src/theme';

import ProgressCircle from './ProgressCircle';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

type ProjectCardProps = {
  projectName: string;
  progress: number;
  updates: number;
};
export const ProjectCard = ({
  projectName,
  progress,
  updates,
}: ProjectCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const backgroundColor =
    theme.palette.mode === 'dark' ? colors.grey[700] : colors.grey[900];

  const backgroundTagColor =
    theme.palette.mode === 'dark' ? colors.grey[400] : colors.grey[800];

  return (
    <Box
      flex={1}
      border={`1px solid ${colors.grey[300]}`}
      p={3}
      borderRadius='8px'
      m={1}
      sx={{ backgroundColor }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <ProgressCircle progress={progress} />
        <IconButton>
          <MoreVertSharpIcon />
        </IconButton>
      </Box>
      <Typography variant='h6' mt={2}>
        {projectName}
      </Typography>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mt={1}
      >
        <Box display='flex'>
          <Box
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
            mr={1}
          >
            <img
              alt='profile-user'
              width='42px'
              height='42px'
              src={`../../assets/user.jpg`}
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            mr={1}
          >
            <img
              alt='profile-user'
              width='42px'
              height='42px'
              src={`../../assets/user.jpg`}
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            mr={1}
          >
            <img
              alt='profile-user'
              width='42px'
              height='42px'
              src={`../../assets/user.jpg`}
              style={{ borderRadius: '50%' }}
            />
          </Box>
        </Box>
        <Box
          p={1}
          py={0.5}
          borderRadius='12px'
          sx={{ backgroundColor: backgroundTagColor }}
        >
          <Typography variant='caption'>{`${updates} updates`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
