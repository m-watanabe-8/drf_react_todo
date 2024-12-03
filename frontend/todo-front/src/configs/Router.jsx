import { createBrowserRouter } from 'react-router-dom';
import Load from '../pages/Load';
import Login from '../pages/Login';
import Top from '../pages/Top';

const router = createBrowserRouter([
    { path: "/todo/", element: <Top />},
    { path: "/loading/", element: <Load />},
    { path: "/login/", element: <Login />},
]);
export default router;
