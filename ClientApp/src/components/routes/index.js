import { Profil } from './pages/profil/Profil.jsx';
import { Login } from './pages/login/Login.jsx';

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
    element: <h1>Dashboard</h1>,
    // require: 'MARKETING', // Exemple : La page du dashboard nécessite d'être un utilisateur ayant le rôle MARKETING pour y accéder
  },
  {
    path: '/messages',
    element: <h1>Messages</h1>,
    // require: 'REGISSEUR', // Exemple : La page des messages nécessite d'être un utilisateur ayant le rôle REGISSEUR pour y accéder
  },
  {
    path: '/projets',
    element: <h1>Projets</h1>,
    // require: 'AUTH,REGISSEUR', // La page des projets nécessite d'être connecté et d'avoir le rôle REGISSEUR pour y accéder
  },
  {
    path: '*',
    element: <Login />,
  }
];

export default AppRoutes;