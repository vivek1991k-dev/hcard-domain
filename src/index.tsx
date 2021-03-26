import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.style';
import { RecoilRoot } from 'recoil';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>,
  document.getElementById('root')
);