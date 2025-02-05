import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './styles/index.scss'; 
import "swiper/swiper-bundle.css";
// import 'antd/dist/antd.css';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token:{
            colorPrimary: "#ecc900",
            colorLink: "#ecc900",
          }
        }}>
          <RouterProvider router={router} />
        </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>,
)
