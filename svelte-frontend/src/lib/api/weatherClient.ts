const base=import.meta.env.VITE_API_BASE_URL||'http://localhost:5000';
export async function getCurrent(city:string){return fetch(`${base}/api/weather/current?city=${city}`);} 
export async function getForecast(city:string){return fetch(`${base}/api/weather/forecast?city=${city}`);} 
