export interface AppState {
  userDetails?: { name: string; age: number };
  postcode?: string;
  selectedProduct?: string;
  loanResult?: {
    principal: number;
    monthlyPayment: number;
    totalPaid: number;
    totalInterest: number;
  };
}