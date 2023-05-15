import { Box, Button, ButtonGroup, useTheme, Typography } from '@mui/material';
import { DashboardHeader } from './DashbaordHeader';
import { tokens } from 'src/theme';

import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useCallback, useState } from 'react';

type ButtonGroupItem = {
  key: string;
  icon: JSX.Element;
  mainText: string;
  subText: string;
};

export const ConflictIP = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const backgroundColor =
    theme.palette.mode === 'dark' ? colors.primary[500] : colors.primary[800];

  const backgroundColorNonSelected =
    theme.palette.mode === 'dark' ? colors.grey[800] : colors.grey[900];

  const borderColor =
    theme.palette.mode === 'dark' ? colors.grey[400] : colors.grey[100];

  const buttonGroupItems = [
    {
      key: 'privateIP',
      selected: true,
      icon: <BackHandOutlinedIcon />,
      mainText: 'Private IP',
      subText: 'LAN administrator',
    },
    {
      key: 'publicIP',
      selected: true,
      icon: <LanguageOutlinedIcon />,
      mainText: 'Public IP',
      subText: 'Service provider',
    },
  ];

  const [selected, setSelected] = useState<string>(buttonGroupItems[0].key);

  const renderButtonGroupItem = useCallback(
    ({ key, icon, mainText, subText }: ButtonGroupItem) => (
      <Button
        onClick={() => setSelected(key)}
        key={key}
        sx={{
          borderColor,
          backgroundColor:
            selected === key ? backgroundColor : backgroundColorNonSelected,
          justifyContent: 'flex-start',
          textTransform: 'none',
        }}
      >
        <Box
          py={0.5}
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          textAlign='start'
          color={colors.grey[100]}
        >
          <Box
            sx={{
              width: '42px',
              height: '42px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
              marginRight: '16px',
              border: `1px solid ${colors.grey[100]}`,
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography
              variant='body1'
              fontWeight={600}
              color={colors.grey[100]}
            >
              {mainText}
            </Typography>
            <Typography variant='body2' color={colors.grey[100]}>
              {subText}
            </Typography>
          </Box>
        </Box>
      </Button>
    ),
    [
      backgroundColor,
      backgroundColorNonSelected,
      borderColor,
      colors.grey,
      selected,
    ]
  );

  return (
    <Box
      mb={4}
      sx={{
        display: {
          sm: 'none',
          md: 'none',
          lg: 'block',
          xl: 'block',
        },
      }}
    >
      <DashboardHeader title='IP conflicts' />
      <Box
        my={2}
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          fullWidth
          orientation='vertical'
          aria-label='selet IP domains'
          style={{ textTransform: 'none' }}
        >
          {buttonGroupItems.map(renderButtonGroupItem)}
        </ButtonGroup>
      </Box>
    </Box>
  );
};
