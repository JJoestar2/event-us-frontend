
export default function authHeader() {

    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user) {
      let token = JSON.parse(localStorage.getItem('token'));
      return token;
    } else {
      return {};
    }
  }