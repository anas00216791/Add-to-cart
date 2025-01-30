"use client"
import React from 'react'
import { store } from './(addtocartfun)/Redux/store';
import { Provider } from 'react-redux';
import {  persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';

function Providers({children,}: Readonly<{children: React.ReactNode}>) {
   let persistor = persistStore(store)
  return (
    <div>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
        {children}
        </PersistGate>
        </Provider>
    </div>
  )
}

export default Providers