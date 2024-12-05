import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import ULogin from './pages/ULogin';
import Riding from './pages/Riding';
import CRiding from './pages/CRiding';
import CSignup from './pages/CSignup';
import UProtectWrapper from './pages/UProtectWrapper';
import Home from './pages/Home';
import ULogout from './pages/ULogout';
import CProtectWrapper from './pages/CProtectWrapper';
import CHome from './pages/CHome';
import CLogout from './pages/CLogout';
import CLogin from './pages/CLogin';
import USignup from './pages/USignup';


const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Start/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/home' element={<UProtectWrapper>
          <Home/>
         </UProtectWrapper>}
         />

         <Route path='/login' element={<ULogin/>}/>
         <Route path='/signup' element={<USignup/>}/>
         <Route path='/riding' element={<Riding/>}/>
         <Route path='/captain-riding' element={<CRiding/>}/>
         <Route path='/captain-signup' element={<CSignup/>}/>
         <Route path='/captain-login' element={<CLogin/>}/>
         <Route path='/user/logout'
         element={<UProtectWrapper>
          <ULogout/>
         </UProtectWrapper>}/>
         <Route path='/captain-home' element={
          <CProtectWrapper>
            <CHome/>
          </CProtectWrapper>
         }
/>
<Route path='/captain-logout' 
element={<CProtectWrapper>
  <CLogout/>
</CProtectWrapper>
}
/>
      </Routes>
      
    </div>
  )
}

export default App
