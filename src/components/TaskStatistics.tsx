import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

import { DashboardHeader } from "./DashbaordHeader";
import { BarChart } from "./BarChart";

export const TaskStatistics = () => {
  const [period, setPeriod] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value as string);
  };

  return (
    <>
      <Box
        display="flex"
        flex={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flex={8}>
          <DashboardHeader
            title="Task statistics"
            subTitle="Distribution of key values for one or more statistics groups"
          />
        </Box>
        <FormControl style={{ flex: 1 }} size="small">
          <InputLabel id="select-day">Day</InputLabel>
          <Select
            labelId="select-day-label"
            id="select-day"
            value={period}
            label="period"
            onChange={handleChange}
          >
            <MenuItem value={10}>Day</MenuItem>
            <MenuItem value={20}>Week</MenuItem>
            <MenuItem value={30}>Month</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box height="70%" mt={4}>
        <BarChart isDashboard={true} />
      </Box>
    </>
  );
};
