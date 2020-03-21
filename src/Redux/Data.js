const dataSet = () => {

let data = new Date();
let year = data.getFullYear();
let month = data.getUTCMonth();
let day = data.getDate();
let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();

const daydata =('0' + day).slice(-2)+"."+('0' + month).slice(-2)+"."+year+" "+('0' + hour).slice(-2)+":"+('0' + minutes).slice(-2)+":"+('0' + seconds).slice(-2) ;
return daydata;
}
export default dataSet;
