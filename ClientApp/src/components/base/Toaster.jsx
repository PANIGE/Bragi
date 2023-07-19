import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importez les styles CSS si vous ne l'avez pas déjà fait

const showToast = (title, message, type) => {
  switch (type) {
    case 'success':
      toast.success(message, { autoClose: 3000, position: 'top-right', closeOnClick: true, pauseOnHover: true });
      break;
    case 'error':
      toast.error(message, { autoClose: 5000, position: 'top-right', closeOnClick: true, pauseOnHover: true });
      break;
    case 'info':
      toast.info(message, { autoClose: 4000, position: 'top-right', closeOnClick: true, pauseOnHover: true });
      break;
    case 'warning':
      toast.warn(message, { autoClose: 3500, position: 'top-right', closeOnClick: true, pauseOnHover: true });
      break;
    default:
      break;
  }
};

export default showToast;
