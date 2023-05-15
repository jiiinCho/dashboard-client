import { Box, Grid, useTheme } from '@mui/material';
import { tokens } from 'src/theme';

import { ResponseTime, ConflictLog, TaskStatistics } from 'src/components';
import { ProjectList } from 'src/components/ProjectList';

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container flex={1}>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <Grid container direction='column'>
          <Grid item width='100%'>
            <Box
              p={2}
              borderBottom={`1px solid ${colors.grey[400]}`}
              sx={{
                height: {
                  xl: 'calc((100vh - 48px) * 0.375)',
                  lg: 'calc((100vh - 48px) * 0.5)',
                  md: 'calc((100vh - 48px) * 0.5)',
                  xs: 'calc((100vh - 48px) * 0.5)',
                },
              }}
            >
              <ResponseTime />
            </Box>
          </Grid>
          <Grid item width='100%'>
            <Box
              p={2}
              sx={{
                height: {
                  xl: 'calc((100vh - 48px) * 0.375)',
                  lg: 'calc((100vh - 48px) * 0.5)',
                  md: 'calc((100vh - 48px) * 0.5)',
                  xs: 'calc((100vh - 48px) * 0.5)',
                },
              }}
            >
              <TaskStatistics />
            </Box>
          </Grid>
          <Grid item width='100%' borderTop={`1px solid ${colors.grey[400]}`}>
            <Box
              p={2}
              width='100%'
              display={{
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'none',
                xl: 'flex',
              }}
              sx={{
                height: {
                  xl: 'calc((100vh - 48px) * 0.2)',
                  lg: 'calc((100vh - 48px) * 0.5)',
                  md: 'calc((100vh - 48px) * 0.5)',
                  xs: 'calc((100vh - 48px) * 0.5)',
                },
              }}
            >
              <ProjectList />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={4} lg={4} xl={4}>
        <Grid container borderLeft={`1px solid ${colors.grey[400]}`}>
          <Grid item width='100%' height='calc(100vh - 48px)'>
            <Box p={2}>
              <ConflictLog />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
