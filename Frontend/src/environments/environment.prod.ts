export const environment = {
  production: false,
  apiUrl: process.env['NEXT_PUBLIC_API_BASE_URL'] || 'http://localhost:3000/api'
};
// Add this for debugging
console.log('Environment API URL:', environment.apiUrl);
console.log('Process env:', process.env['NEXT_PUBLIC_API_BASE_URL']);