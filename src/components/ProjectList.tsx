import { Box } from '@mui/material';

import { DashboardHeader } from './DashbaordHeader';
import { ProjectCard } from './ProjectCard';

export const ProjectList = () => {
  return (
    <Box display='flex' width='100%' flexDirection='column'>
      <DashboardHeader title='Recent projects' />
      <Box display='flex' mt={1}>
        <ProjectCard projectName='Finches' updates={3} progress={0.25} />
        <ProjectCard projectName='Woodpecker ' updates={1} progress={0.45} />
        <ProjectCard projectName='Kiwi' updates={0} progress={0.56} />
      </Box>
    </Box>
  );
};
