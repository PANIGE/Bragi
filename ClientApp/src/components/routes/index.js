import { Profil } from './pages/profil/Profil.jsx';
import { Login } from './pages/login/Login.jsx';
import { Dashboard } from './pages/dashboard/Dashboard.jsx';
import { ProjectList } from './pages/project/overview/ProjectList.jsx';

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
    path: '/projects',
    element: <ProjectList />,
    // require: 'AUTH,REGISSEUR', // La page des projets nécessite d'être connecté et d'avoir le rôle REGISSEUR pour y accéder
  },
  {
    path: '*',
    element: <h1>404 - Page non trouvée</h1>,
  }
];

export default AppRoutes;
