import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext.jsx';
import SigninPage from '../pages/Signin';
import SignupPage from '../pages/Signup';
import DashboardPage from '../pages/Dashboard';
import SpotRegistrationPage from '../pages/SpotRegistration';
import SpotsPage from '../pages/Spots';
import PrivateRoute from './PrivateRoute';
// Endpoints:
// http://localhost:3000/usuarios
// http://localhost:3000/spots


function RoutesComponent() {

    // const { isAuthenticated } = useAuth()
    // const isAuthenticated = true    //muda para true ou false para teste. Fazer o mesmo no app.jsx

    //        function loginRedirect(component) {
    //     if (isAuthenticated) {
    //         // return <Navigate to='/home' replace />
    //     }
    //      return component
    // }

    return (
        // isAuthenticated
        // <Routes>
        //     <Route path='/login' element={loginRedirect(<SigninPage/>)} />
        //     <Route path='/cadastro' element={loginRedirect(<SignupPage/>)} />
        //     <Route path='/' element={loginRedirect(<DashboardPage/>)} />
        //     <Route path='/dashboard' Component={DashboardPage} />
        //     <Route path='/locais' Component={SpotsPage} />
        //     <Route path='/local' Component={SpotRegistrationPage} />
        //     <Route path='*' element={<Navigate replace to='/dashboard' />} />
        //     {/* {isAuthenticated ? (
              
        //     ) : (
           
        //     )} */}

        //     {/* /nao-existente */}
        //     {/* <Route path='*' Component={App} /> */}
        // </Routes>
        <Routes>
        <Route path='/login' element={<SigninPage />} />
        <Route path='/cadastro' element={<SignupPage />} />
        <Route path='/' element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path='/dashboard' element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path='/locais' element={<PrivateRoute><SpotsPage /></PrivateRoute>} />
        <Route path='/local' element={<PrivateRoute><SpotRegistrationPage /></PrivateRoute>} />
        <Route path='*' element={<Navigate replace to='/dashboard' />} />
    </Routes>

    )
} 

export default RoutesComponent