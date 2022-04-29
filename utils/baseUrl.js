const baseUrl = process.env.NODE_ENV === "production" 
? 'https://digitizepk-nextjs-saqib-github.vercel.app' 
: 'http://localhost:3000';

export default baseUrl;