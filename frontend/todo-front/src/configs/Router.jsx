import { createBrowserRouter } from 'react-router-dom';
import Top from '../pages/Top';

const router = createBrowserRouter([
    { path: "/", element: <Top />}
]);
export default router;
