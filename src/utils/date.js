export const dataChanger = (date) => {
  const currentDate = new Date();
  const specificDate = new Date(date);

const differenceInMilliseconds = currentDate - specificDate;
const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
const differenceInHours = Math.floor(differenceInMinutes / 60);
const differenceInDays = Math.floor(differenceInHours / 24);
const differenceInWeeks = Math.floor(differenceInDays / 7);
const differenceInMonths = Math.floor(differenceInDays / 30);

let result = '';

if (differenceInDays >= 30) {
  result = `${differenceInMonths} months ago`;
} else if (differenceInDays >= 7) {
  result = `${differenceInWeeks} weeks ago`;
} else if (differenceInDays >= 1) {
  result = `${differenceInDays} days ago`;
} else if (differenceInHours >= 1) {
  result = `${differenceInHours} hours ago`;
} else {
  result = `${differenceInMinutes} minutes ago`;
}



  return result;
};
