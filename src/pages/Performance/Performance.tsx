import { Box } from '@mui/material';
import { Header, PieChart } from 'src/components';

export const Performance = () => {
  return (
    <Box m='20px'>
      <Header title='Performance' subTitle='Performance evaluation' />
      <Box height='75vh'>
        <PieChart />
      </Box>
    </Box>
  );
};
