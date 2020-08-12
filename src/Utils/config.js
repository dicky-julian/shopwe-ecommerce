import { BASE_URL } from '@env'
const baseUrl = BASE_URL;
const tokenApi = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoxLCJuYW1lIjoiYWRtaW4iLCJpbWFnZSI6Imh0dHA6Ly8xOTIuMTY4LjQzLjgxOjMwMDAvc2hvcHdlL2ltYWdlcy9hdmF0YXIucG5nIiwidG9rZW5UeXBlIjoibG9naW4iLCJpYXQiOjE1OTY4NjA0MDEsImV4cCI6MTU5NzQ2NTIwMX0.omqbxLdVh-MQROznz2YoZmEaNbPJaI4NQd1ylv3rvug';

export const apiUri = {
  products: `${baseUrl}/products`,
  payments: `${baseUrl}/payments`,
  users: `${baseUrl}/users`
}

export {
  tokenApi
}