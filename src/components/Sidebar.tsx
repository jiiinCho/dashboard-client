import {
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';

import { tokens } from 'src/theme';

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AddchartIcon from '@mui/icons-material/Addchart';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

type SidebarItem = {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const Item = ({ title, to, icon, selected, setSelected }: SidebarItem) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const backgroundColor =
    theme.palette.mode === 'dark' ? colors.grey[500] : colors.primary[800];

  return (
    <MenuItem
      active={selected === title}
      style={{
        ...(selected === title && { backgroundColor }),
      }}
      onClick={() => {
        navigate(to);
        setSelected(title);
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState<string>('Dashboard');
  const { collapseSidebar, collapsed } = useProSidebar();

  const backgroundColor =
    theme.palette.mode === 'dark' ? colors.grey[800] : colors.grey[900];

  const backgroundColorHover =
    theme.palette.mode === 'dark' ? colors.grey[500] : colors.primary[800];

  const userProfile = useCallback(() => {
    return (
      <Box mb={8}>
        {collapsed ? (
          <Box display='flex' justifyContent='center' alignItems='center'>
            <img
              alt='profile-user'
              width='50px'
              height='50px'
              src={`../../assets/user.jpg`}
              style={{ borderRadius: '50%' }}
            />
          </Box>
        ) : (
          <>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <img
                alt='profile-user'
                width='100px'
                height='100px'
                src={`../../assets/user.jpg`}
                style={{ borderRadius: '50%' }}
              />
            </Box>
            <Box textAlign='center'>
              <Typography
                fontWeight={600}
                variant='h6'
                color={colors.grey[100]}
                sx={{ m: '10px 0' }}
              >
                John Doe
              </Typography>
              <Button
                variant='outlined'
                size='small'
                sx={{
                  color: colors.primary[300],
                  borderColor: colors.primary[300],
                }}
              >
                Edit
              </Button>
            </Box>
          </>
        )}
      </Box>
    );
  }, [collapsed, colors.grey, colors.primary]);

  return (
    <Box
      sx={{
        position: 'sticky',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        top: 0,
        bottom: 0,
        backgroundColor,
        borderRight: `1px solid ${colors.grey[400]}`,
      }}
    >
      <ProSidebar
        backgroundColor={backgroundColor}
        style={{ borderRight: 'none' }}
      >
        <Menu
          menuItemStyles={{
            root: () => ({
              '&:not(:first-of-type)': {
                backgroundColor,
                borderBottom: `1px solid ${backgroundColor}`,
              },
              '&:not(:first-of-type):hover': {
                backgroundColor: backgroundColorHover,
              },
            }),
            button: () => ({
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }),
          }}
        >
          <MenuItem>
            <Box display='flex' justifyContent='flex-end' ml='15px'>
              <IconButton onClick={() => collapseSidebar()}>
                {collapsed ? <MenuOutlinedIcon /> : <CloseIcon />}
              </IconButton>
            </Box>
          </MenuItem>
          <Item
            title='Dashboard'
            to='/'
            icon={<SpaceDashboardIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Users'
            to='/users'
            icon={<PeopleAltOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Task status'
            to='/task'
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Performance'
            to='/performance'
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Response'
            to='/response'
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Form'
            to='/form'
            icon={<AddchartIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </ProSidebar>
      {userProfile()}
    </Box>
  );
};
