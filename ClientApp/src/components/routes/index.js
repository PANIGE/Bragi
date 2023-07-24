import { Profil } from 'src/components/routes/pages/profil/Profil.jsx';
import { Login } from 'src/components/routes/pages/login/Login.jsx';
import { Dashboard } from 'src/components/routes/pages/dashboard/Dashboard.jsx';
import { ProjectList } from 'src/components/routes/pages/project/overview/ProjectList.jsx';
import { ProjectCreation } from 'src/components/routes/pages/project/creation/ProjectCreation.jsx';
import { ProjectTask } from 'src/components/routes/pages/project/task/ProjectTask.jsx';
import { Messaging } from 'src/components/routes/pages/notification/Messaging.jsx';
import { FileUpload } from 'src/components/routes/pages/upload/file/FileUpload.jsx';

// Function to check if the user is authenticated (You may need to implement this based on your authentication mechanism)
const isAuthenticated = () => {
  const tokens = localStorage.getItem('tokens');
  return tokens !== null && tokens !== undefined;
};

const AppRoutes = [
  {
    path: '/login',
    index: true,
    element: <Login />,
    // If the user is already authenticated, redirect them to another page (e.g., dashboard)
    // This is optional and depends on your desired behavior.
    // If you want to prevent logged-in users from accessing the login page, you can uncomment this line.
    // redirectTo: '/dashboard', 
  },
  {
    path: '/profil',
    element: <Profil />,
    //require: 'AUTH',
  },
  {
    path: '/notifications',
    element: <Messaging />,
    //require: 'AUTH',
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/messages',
    element: <h1>Messages</h1>,
    // require: 'REGISSEUR',
  },
  {
    path: '/new-projects',
    element: <ProjectCreation/>,
    // require: 'REGISSEUR',
  },
  {
    path: '/my-projects',
    element: <ProjectList />,
    // require: 'REGISSEUR',
  },
  {
    path: '/tasks',
    element: <ProjectTask/>,
    // require: 'AUTH',
  },
  {
    path: '/rushs-upload',
    element: <FileUpload/>,
  },
  {
    path: '*',
    element: <h1>Erreur 404 - Page non trouvée</h1>,
  }
];

// Filter the routes based on the user's roles
const filteredRoutes = AppRoutes.filter(route => {
  if (route.require) {
    const requiredRoles = route.require.split(',');
    const userRoles = localStorage.getItem('roles');
    return isAuthenticated() && userRoles && requiredRoles.some(role => userRoles.includes(role.trim()));
  }
  return true;
});

export default filteredRoutes;
