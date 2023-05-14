import { useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

import { LineChart } from './LineChart';
import { DashboardHeader } from './DashbaordHeader';

export const ResponseTime = () => {
  const [period, setPeriod] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value as string);
  };

  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box flex={8}>
          <DashboardHeader
            title='Response time'
            subTitle='Response times across regions in the last 24 hours'
          />
        </Box>
        <FormControl style={{ flex: 1 }} size='small'>
          <InputLabel id='select-day'>Day</InputLabel>
          <Select
            labelId='select-day-label'
            id='select-day'
            value={period}
            label='period'
            onChange={handleChange}
          >
            <MenuItem value={10}>Day</MenuItem>
            <MenuItem value={20}>Week</MenuItem>
            <MenuItem value={30}>Month</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box height='70%' mt={1}>
        <LineChart isDashboard={true} />
      </Box>
    </>
  );
};
