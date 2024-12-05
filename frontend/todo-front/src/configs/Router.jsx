import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Top from '../pages/Top';

//APIURL
export const apiURL = 'http://localhost:8000/api/v1/';

const router = createBrowserRouter([
    { path: "/todo/", element: <Top />},
    { path: "/login/", element: <Login />},
    { path: "/signup/", element: <Signup />},
]);
export default router;
