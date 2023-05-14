import { Box } from '@mui/material';

import { DashboardHeader } from './DashbaordHeader';
import { ProjectCard } from './ProjectCard';

export const ProjectList = () => {
  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box flex={8}>
          <DashboardHeader title='Recent projects' />
        </Box>
      </Box>
      <Box display='flex' flex={1} mt={1}>
        <ProjectCard projectName='Finches' updates={3} progress={0.25} />
        <ProjectCard projectName='Woodpecker ' updates={1} progress={0.45} />
        <ProjectCard projectName='Kiwi' updates={0} progress={0.56} />
        <ProjectCard projectName='Vulture' updates={1} progress={0.86} />
      </Box>
    </>
  );
};
