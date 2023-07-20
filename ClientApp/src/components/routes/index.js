import { Profil } from './pages/profil/Profil.jsx';
import { Login } from './pages/login/Login.jsx';
import { Dashboard } from './pages/dashboard/Dashboard.jsx';
import { ProjectList } from './pages/project/overview/ProjectList.jsx';
import { ProjectCreation } from './pages/project/creation/ProjectCreation.jsx';
import { ProjectTask } from './pages/project/task/ProjectTask.jsx';
import { Messaging } from './pages/notification/Messaging.jsx';

const AppRoutes = [
  {
    path: '/login',
    index: true,
    element: <Login />,
    // require: 'AUTH', // La page de login ne sera pas accessible si l'utilisateur est déjà connecté
  },
  {
    path: '/profil',
    element: <Profil />,
    // require: 'AUTH', // La page de profil nécessite d'être connecté pour y accéder
  },
   {
    path: '/notifications',
    element: <Messaging />,
   },
  {
    path: '/dashboard',
    element: <Dashboard />,
    // require: 'MARKETING', // Exemple : La page du dashboard nécessite d'être un utilisateur ayant le rôle MARKETING pour y accéder
  },
  {
    path: '/messages',
    element: <h1>Messages</h1>,
    // require: 'REGISSEUR', // Exemple : La page des messages nécessite d'être un utilisateur ayant le rôle REGISSEUR pour y accéder
  },
  {
    path: 'new-projects',
    element: <ProjectCreation/>,
  },
  {
    path: '/projects',
    element: <ProjectList />,
    // require: 'AUTH,REGISSEUR', // La page des projets nécessite d'être connecté et d'avoir le rôle REGISSEUR pour y accéder
  },
  {
    path: '/tasks',
    element: <ProjectTask/>,
  },
  {
    path: '*',
    element: <h1>404 - Page non trouvée</h1>,
  }
];

export default AppRoutes;
