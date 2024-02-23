export function calculateAge(birthDate) {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  let hours = today.getHours() - birthDate.getHours();
  let minutes = today.getMinutes() - birthDate.getMinutes();
  let seconds = today.getSeconds() - birthDate.getSeconds();

  // Adjust for negative months or days
  if (months < 0 || ( months === 0 && days < 0 )) {
    years--;
    months += ( months < 0 ? 12 : 0 );
  }

  if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    days += lastMonth.getDate();
    months--;
  }

  if (hours < 0) {
    days--;
    hours += 24;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  // Handle negative milliseconds
  if (seconds < 0) {
    minutes--;
    seconds += 1000;
  }

  return { years, months, days, hours, minutes, seconds };
}
