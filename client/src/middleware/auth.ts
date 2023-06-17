import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { getToken } from '../utils/auth'; // Importa una función para obtener el token JWT almacenado en el cliente
import api from '../api/axiosInstance';

export function isAuthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  const token = getToken();

  if (token) {
    api.post("/jwt/jwtValidateToken",{token}).then(response => {
      console.log(response)
      if(response.status){
        next()
      }
    }).catch((e) => {
      localStorage.removeItem("token")
      next("/")
    })
  } else {
    console.log('volvemos a login')
    next('/');
  }
}
