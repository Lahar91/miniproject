import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import 'antd/dist/reset.css'; // Import Ant Design styles
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AppLayout from '../components/Layout'; // Import Layout yang baru


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </>
  );
}

export default MyApp;