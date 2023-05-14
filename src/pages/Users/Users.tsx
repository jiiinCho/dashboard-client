import { useEffect, useState } from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

import { Header } from 'src/components';
import { tokens } from 'src/theme';

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

import { useFetch } from 'src/hook';

type User = {
  name: string;
  website: string;
  email: string;
  phone: string;
  accessLevel: 'admin' | 'manager' | 'user';
};

export const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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

      const modified = (data as any[]).map((item, index) => {
        const mod = index % 3;
        return {
          ...item,
          access: mod === 0 ? 'admin' : mod === 1 ? 'manager' : 'user',
        };
      });

      setUsers(modified as User[]);
    });
  }, [fetchData]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'website',
      headerName: 'Website',
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'credentials',
      headerName: 'Credentials',
      flex: 1,
      renderCell: ({ row: { access } }: any) => {
        return (
          <Box
            sx={{
              width: '60%',
              p: 1,
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '8px',
              backgroundColor:
                access === 'admin'
                  ? colors.primary[600]
                  : access === 'manager'
                  ? colors.greenAccent[600]
                  : colors.redAccent[500],
            }}
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m='20px'>
      <Header title='Users' subTitle='Managing the Team Members' />
      <Box
        m='40px 0 0 0'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.grey[600],
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: colors.grey[600],
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          sx={{ backgroundColor: 'transparent' }}
          checkboxSelection
          rows={users || []}
          columns={columns}
          pageSizeOptions={[5, 10, 25]}
          loading={loading}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Users;
