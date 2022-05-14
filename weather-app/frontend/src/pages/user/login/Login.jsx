//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import './Login.module.css';
import { PageTitle } from './PageTitle';
import { LoginForm } from './LoginForm';
import React from 'react';

export default function Login() {
  return (
    <div className='box md-5'>
      <div className="p-5 bg-white" style={{margin:"15% 20% 0 20%"}}>
        <PageTitle Name="WEATHERING WITH ME"/>
        <LoginForm />
      </div>
    </div>
  );
}

