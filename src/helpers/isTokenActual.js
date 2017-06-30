import jwtDecode from 'jwt-decode';

export default function isTokenActual(token) {
  const decoded = jwtDecode(token);
  const tokenExpiresTimestamp = decoded.exp * 1000;
  const currentTimestamp = new Date().getTime();
  const difference = tokenExpiresTimestamp - currentTimestamp;
  if (difference <= 1800) {
    return false;
  }

  return true;
}
