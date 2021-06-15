import React from 'react';

import loadingPage from './../../Assets/img/loadingPage.gif'

export default function LoadingPage(props) {
  return (
    <div className='loading_page'>
      <img src={loadingPage} alt="Loading" />
    </div>
  )
}
