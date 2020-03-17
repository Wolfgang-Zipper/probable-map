const dataSet = () => {
let data = new Date();
let year = data.getFullYear();
let month = data.getUTCMonth();
let day = data.getDate();
let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();

const daydata = day+"."+month+"."+year+" "+hour+":"+minutes+":"+seconds ;
return daydata;
}
export default dataSet;
