const TimeDifference = () => {
  const startDate = new Date('2021-10-31T03:00:00');
  const currentDate = new Date();
  const diffInMilliseconds = currentDate - startDate;

  let remainingTime = diffInMilliseconds;
  const years = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 365));
  remainingTime -= years * (1000 * 60 * 60 * 24 * 365);

  const months = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30));
  remainingTime -= months * (1000 * 60 * 60 * 24 * 30);

  const weeks = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 7));
  remainingTime -= weeks * (1000 * 60 * 60 * 24 * 7);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  remainingTime -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));

  return {
    years,
    months,
    weeks,
    days,
    hours,
  };
};

export default TimeDifference;
