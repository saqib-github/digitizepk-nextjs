const baseUrl = process.env.NODE_ENV === "production" 
? 'https://www.digitizepk.com' 
: 'http://localhost:3000';

export default baseUrl;