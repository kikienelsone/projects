import React, { useContext } from 'react';
import { Routes, Route } from 'react-router';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../route';
import Login from '../pages/Login';
import { AuthContext } from '../context';
import Loader from '../Loader/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        element={route.element}


                    />
                )}


                <Route path="*" element={<Posts />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        element={route.element}


                    />
                )}


                <Route path="*" element={<Login />} />
            </Routes>



    );
};

export default AppRouter;