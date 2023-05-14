import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Topbar, Sidebar } from './components';
import { ColorModeContext, useMode } from './theme';
import { Dashboard, Users, Task, Form, Response, Performance } from './pages';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className='app'>
            <Sidebar />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/users' element={<Users />} />
                <Route path='/form' element={<Form />} />
                <Route path='/task' element={<Task />} />
                <Route path='/performance' element={<Performance />} />
                <Route path='/response' element={<Response />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
