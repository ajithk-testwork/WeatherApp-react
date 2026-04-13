
export function dayRate(ratePerHour) {
  return ratePerHour * 8
}


export function daysInBudget(budget, ratePerHour) {
  const dayRate = ratePerHour * 8;
  return Math.floor(budget / dayRate);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dayRate = ratePerHour * 8;

  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  const monthlyCost = 22 * dayRate * (1 - discount);

  const total =
    fullMonths * monthlyCost +
    remainingDays * dayRate;

  return Math.ceil(total);
}