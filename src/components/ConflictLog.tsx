import { useCallback, useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
  useTheme,
  MenuItem,
  SelectChangeEvent,
  CircularProgress,
} from '@mui/material';

import { tokens } from 'src/theme';
import { useFetch } from 'src/hook';
import { uuid } from 'src/utils';

import { ConflictIP } from './ConflictIP';
import { DashboardHeader } from './DashbaordHeader';

import SquareSharpIcon from '@mui/icons-material/SquareSharp';
import PentagonSharpIcon from '@mui/icons-material/PentagonSharp';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';

type User = {
  name: string;
  key: string;
};

export const ConflictLog = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [period, setPeriod] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value as string);
  };

  const [users, setUsers] = useState<User[]>([]);

  const { loading, fetchData } = useFetch();
  const URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetchData({
      url: URL,
    }).then((data) => {
      if (!data) {
        return;
      }

      const users = (data as any[]).map(({ name }) => {
        const key = uuid(8);

        return {
          name,
          key,
        };
      });

      setUsers(users as User[]);
    });
  }, [fetchData]);

  const renderList = useCallback(() => {
    if (loading) {
      return <CircularProgress />;
    }

    return (
      <>
        {users.map(({ key, name }, i) => (
          <Box
            py={2}
            key={key}
            display='flex'
            alignItems='center'
            borderBottom={`1px solid ${colors.grey[700]}`}
          >
            {getShape(i)}
            <Typography
              pl={2}
              color={colors.primary[300]}
              variant='body1'
              width='30%'
              fontWeight={600}
            >
              {key}
            </Typography>
            <Typography color={colors.grey[100]} variant='body1' px={2}>
              |
            </Typography>
            <Typography color={colors.grey[100]}>{name}</Typography>
          </Box>
        ))}
      </>
    );

    function getShape(index: number) {
      const mod = index % 3;
      if (mod === 0) {
        return (
          <Box
            display='flex'
            alignItems='center'
            color={colors.greenAccent[500]}
          >
            <SquareSharpIcon />
          </Box>
        );
      } else if (mod === 1) {
        return (
          <Box display='flex' alignItems='center' color={colors.redAccent[500]}>
            <PentagonSharpIcon />
          </Box>
        );
      } else {
        return (
          <Box
            display='flex'
            alignItems='center'
            color={colors.blueAccent[500]}
          >
            <CircleSharpIcon />
          </Box>
        );
      }
    }
  }, [
    colors.blueAccent,
    colors.greenAccent,
    colors.grey,
    colors.primary,
    colors.redAccent,
    loading,
    users,
  ]);

  return (
    <>
      <ConflictIP />
      <Box
        mb={2}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Box flex={3} alignItems='center'>
          <DashboardHeader title='Conflict log' />
        </Box>
        <Box flex={1}>
          <FormControl fullWidth size='small'>
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
      </Box>
      {renderList()}
    </>
  );
};
