import { Box, useTheme } from '@mui/material';
import { tokens } from 'src/theme';

import { ResponseTime, ConflictLog, TaskStatistics } from 'src/components';
import { ProjectList } from 'src/components/ProjectList';

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display='grid' gridTemplateColumns='repeat(12, 1fr)'>
      <Box
        gridColumn='span 8'
        gridRow='span 3'
        borderBottom={`1px solid ${colors.grey[400]}`}
        borderRight={`1px solid ${colors.grey[400]}`}
        p={3}
      >
        <ResponseTime />
      </Box>
      <Box
        gridColumn='span 4'
        gridRow='span 6'
        overflow='auto'
        borderBottom={`1px solid ${colors.grey[400]}`}
        p={3}
      >
        <ConflictLog />
      </Box>
      <Box
        gridColumn='span 8'
        gridRow='span 3'
        borderBottom={`1px solid ${colors.grey[400]}`}
        borderRight={`1px solid ${colors.grey[400]}`}
        p={3}
      >
        <TaskStatistics />
      </Box>
      <Box gridColumn='span 12' p={3}>
        <ProjectList />
      </Box>
    </Box>
  );
};
