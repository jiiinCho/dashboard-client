import { Box } from '@mui/material';
import { Header, LineChart } from 'src/components';

export const Response = () => {
  return (
    <Box m='20px'>
      <Header
        title='Response time'
        subTitle='Response times across regions in the last 24 hours'
      />
      <Box height='75vh'>
        <LineChart />
      </Box>
    </Box>
  );
};
