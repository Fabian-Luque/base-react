import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import awsconfig from './aws-exports.js';
import { Amplify } from 'aws-amplify';
import { ThemeProvider  } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
<ThemeProvider>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode>, */}
</ThemeProvider> 
)
