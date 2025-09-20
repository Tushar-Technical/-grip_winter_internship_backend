
const crypto =require ("crypto");

 function generateOtp(length = 6) {
  
  const max = 10 ** length;
  const num = Math.floor(Math.random() * max);
  return num.toString().padStart(length, "0");
}
module.exports= {generateOtp}