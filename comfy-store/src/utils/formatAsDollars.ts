export const formatAsDollar = (price: string | number): string => {
  const dollarAmount = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) / 100);
  return dollarAmount;
};
