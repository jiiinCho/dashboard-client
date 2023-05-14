import { Box } from '@mui/material';
import { Header, BarChart } from 'src/components';

export const Task = () => {
  return (
    <Box m='20px'>
      <Header
        title='Task statistics'
        subTitle='Distribution of key values for one or more statistics groups'
      />
      <Box height='75vh'>
        <BarChart />
      </Box>
    </Box>
  );
};
