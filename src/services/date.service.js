const MONTHS_L = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const MONTHS_S = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// const DAYS_L = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAYS_S = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const getDisplayHour = (hour) => {
//     console.log(hour.length);
//     return (hour.length === 1) ? "0" + hour : hour;
// };
// const getDisplaMinute = (min) => {
//     console.log(min.length);
//     return (min.length === 1) ? "0" + min : min;
// };

const getDisplayDayShort = (day) => {
    return DAYS_S[day];
}

const getDisplayMonthLong = (month) => {
    return MONTHS_L[month];
};

export const getAvailDisplayDate = (date) => {

    return `${getDisplayDayShort(date.getDay())}, ${getDisplayMonthLong(date.getMonth())} ${date.getDate()}, ${date.getYear() + 1900}`;

}