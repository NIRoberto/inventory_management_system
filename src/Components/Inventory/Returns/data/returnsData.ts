interface ReturnData {
  id: string;
  product: string;
  category: string;
  returnReason: string;
  returnDate: string;
  quantityReturned: number;
  condition: "Damaged" | "Wrong Item" | "Defective" | "Other";
  status: "Pending" | "Approved" | "Rejected";
  refundAmount: number;
  customer: string;
}

export type { ReturnData };

const returnsData: ReturnData[] = [
  {
    id: "R001",
    product: "Trainee Laptop",
    category: "Electronics",
    returnReason: "Damaged during shipment",
    returnDate: "2025-02-01",
    quantityReturned: 1,
    condition: "Damaged",
    status: "Pending",
    refundAmount: 850, // USD
    customer: "John Rukundo",
  },
  {
    id: "R002",
    product: "Office Chair",
    category: "Furniture",
    returnReason: "Wrong item delivered",
    returnDate: "2025-02-05",
    quantityReturned: 2,
    condition: "Wrong Item",
    status: "Approved",
    refundAmount: 250, // USD
    customer: "Ingabire Mukamugema",
  },
  {
    id: "R003",
    product: "Monitor",
    category: "Electronics",
    returnReason: "Defective display",
    returnDate: "2025-02-07",
    quantityReturned: 1,
    condition: "Defective",
    status: "Rejected",
    refundAmount: 200, // USD
    customer: "Munyaneza Ndoli",
  },
  {
    id: "R004",
    product: "Broom",
    category: "Cleaning Materials",
    returnReason: "Not as described",
    returnDate: "2025-02-10",
    quantityReturned: 3,
    condition: "Other",
    status: "Pending",
    refundAmount: 30, // USD
    customer: "Niyonsenga Gakire",
  },
  {
    id: "R005",
    product: "Employee Laptop",
    category: "Electronics",
    returnReason: "Dead on arrival",
    returnDate: "2025-02-12",
    quantityReturned: 1,
    condition: "Defective",
    status: "Approved",
    refundAmount: 1200, // USD
    customer: "Kamanzi Mugisha",
  },
  {
    id: "R006",
    product: "Plates Set",
    category: "Utensils",
    returnReason: "Damaged during shipment",
    returnDate: "2025-02-14",
    quantityReturned: 4,
    condition: "Damaged",
    status: "Pending",
    refundAmount: 50, // USD
    customer: "Nyirabera Imanishimwe",
  },
  {
    id: "R007",
    product: "Cleaning Mop",
    category: "Cleaning Materials",
    returnReason: "Wrong item delivered",
    returnDate: "2025-02-18",
    quantityReturned: 1,
    condition: "Wrong Item",
    status: "Rejected",
    refundAmount: 20, // USD
    customer: "Murekatete Mutoni",
  },
];

export default returnsData;
