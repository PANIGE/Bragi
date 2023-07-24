import React from 'react';
import { NavLink } from 'react-router-dom';

// import axios from 'axios';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink , Button,Avatar} from '@chakra-ui/react';
import './profil.css';
// import { accountService } from '@service/account.service';



import Header from 'src/components/layout/header/Header.jsx';


export function Profil() {

  document.title = 'Bragi - Profil';

  const currentUser = {
    "id": 1,
    "password": "password",
    "role": "Marketing",
    "fullName": "Jean Dupont",
    "email": "Jean.dupont@exemple.com",
  };
  /*
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users', {
            "session": token,
        });

        setUser(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur :', error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  if (!token) {
    return <div>Veuillez vous connecter pour accéder à votre profil.</div>;
  }

  if (!user) {
    return <div>Chargement...</div>;
  }
*/
  return (
    <div className="profileContainer">
      <Header 
      leftContent={
        <Breadcrumb fontWeight='bold' fontSize='2xl' align='center' separator='/' flexDir='row' justifyContent='center' >
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Profil</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      rightContent={
        <div className="headerNavLinks">
          <NavLink to="/help" className="link">
            Besoin d’aide ?
          </NavLink>
        </div>
      }
      >
 
      </Header>
      <div className="profileCard">
        <span className="roleSection">
          {currentUser.role}
        </span>
        <div className="profileContent">
        <Avatar name={currentUser.fullName} src={currentUser.image} height={"250px"} width={"250px"} />
          <div className="container">
            <div className="profileInfo">
              <div id="profileName">
                <span className='infoTitle'>nom, prénom</span>
                <span className='userData'>{currentUser.fullName}</span>
              </div>
              <div id="profileMail">
                <span className='infoTitle'>email</span>
                <span className='userData'>{currentUser.email}</span>
              </div>
              <div id="profilePassword">
                <span className='infoTitle'>mot de passe</span>
                <span className='userData'>*************</span>
              </div>
            </div>
              <Button leftIcon={<i className="fas fa-sign-out-alt"></i>} 
              width={200} height={50} colorScheme='red' variant='solid'
              onClick={() => { window.location.href = '/login'; }}>
                Déconnexion
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};