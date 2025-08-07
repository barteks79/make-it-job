function isToday(date: Date) {
  const currentDate = new Date();

  if (
    date.getFullYear() === currentDate.getFullYear() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate()
  ) {
    return true;
  }

  return false;
}

export function countDaysAgo(date: Date) {
  if (date.getTime() > new Date().getTime()) {
    return -1;
  }

  let i: number = 0;

  while (true) {
    const newDate = new Date(date.getTime() + 1000 * 60 * 60 * 24 * i);

    if (isToday(newDate)) {
      break;
    }

    i++;
  }

  return i;
}
