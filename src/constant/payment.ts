type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "129egac23",
    amount: 150,
    status: "failed",
    email: "example@gmail.com",
  },
  {
    id: "876anx3t",
    amount: 200,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "176anx3t",
    amount: 200,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "276anx3t",
    amount: 200,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "376anx3t",
    amount: 200,
    status: "success",
    email: "example@gmail.com",
  }
];
