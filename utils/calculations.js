function calculateInterest(P, N, R) {
  return P * N * (R / 100);
}

function calculateTotalAmount(P, I) {
  return P + I;
}

function calculateMonthlyEMI(A, N) {
  return A / (N * 12);
}

module.exports = {
  calculateInterest,
  calculateTotalAmount,
  calculateMonthlyEMI,
};
