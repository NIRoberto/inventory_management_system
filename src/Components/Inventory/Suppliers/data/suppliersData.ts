interface SupplierData {
  id: string;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  productsSupplied: string[];
  lastOrderDate: string;
  orderHistory: {
    orderId: string;
    orderDate: string;
    product: string;
    quantityOrdered: number;
    orderAmount: number;
    status: "Pending" | "Completed" | "Cancelled";
  }[];
}

export type { SupplierData };
const suppliersData: SupplierData[] = [
  {
    id: "S001",
    name: "Tech Supplies Ltd.",
    contactPerson: "Eric Murenzi",
    phone: "+250 788 123 456",
    email: "eric@techsupplies.com",
    address: "Kigali, Rwanda",
    productsSupplied: ["Trainee Laptop", "Employee Laptop", "Monitors"],
    lastOrderDate: "2025-01-10",
    orderHistory: [
      {
        orderId: "O001",
        orderDate: "2025-01-10",
        product: "Trainee Laptop",
        quantityOrdered: 15,
        orderAmount: 12000, // USD
        status: "Completed",
      },
      {
        orderId: "O002",
        orderDate: "2025-01-15",
        product: "Employee Laptop",
        quantityOrdered: 10,
        orderAmount: 10000, // USD
        status: "Completed",
      },
    ],
  },
  {
    id: "S002",
    name: "Furniture World",
    contactPerson: "Fatuma Akimana",
    phone: "+250 789 234 567",
    email: "fatuma@furnitureworld.com",
    address: "Kigali, Rwanda",
    productsSupplied: ["Office Chair", "Desks", "Shelves"],
    lastOrderDate: "2025-02-01",
    orderHistory: [
      {
        orderId: "O003",
        orderDate: "2025-02-01",
        product: "Office Chair",
        quantityOrdered: 20,
        orderAmount: 4000, // USD
        status: "Completed",
      },
      {
        orderId: "O004",
        orderDate: "2025-02-05",
        product: "Desks",
        quantityOrdered: 10,
        orderAmount: 3000, // USD
        status: "Completed",
      },
    ],
  },
  {
    id: "S003",
    name: "CleanTech Supplies",
    contactPerson: "Samson Mugenzi",
    phone: "+250 783 345 678",
    email: "samson@cleantechsupplies.com",
    address: "Rubavu, Rwanda",
    productsSupplied: ["Broom", "Mops", "Cleaning Detergents"],
    lastOrderDate: "2025-01-25",
    orderHistory: [
      {
        orderId: "O005",
        orderDate: "2025-01-25",
        product: "Broom",
        quantityOrdered: 50,
        orderAmount: 100, // USD
        status: "Completed",
      },
      {
        orderId: "O006",
        orderDate: "2025-02-02",
        product: "Mops",
        quantityOrdered: 40,
        orderAmount: 120, // USD
        status: "Completed",
      },
    ],
  },
  {
    id: "S004",
    name: "Utensils Hub",
    contactPerson: "Amina Niyonsaba",
    phone: "+250 720 456 789",
    email: "amina@utensilshub.com",
    address: "Musanze, Rwanda",
    productsSupplied: ["Plates Set", "Cups", "Bowls"],
    lastOrderDate: "2025-02-10",
    orderHistory: [
      {
        orderId: "O007",
        orderDate: "2025-02-10",
        product: "Plates Set",
        quantityOrdered: 100,
        orderAmount: 500, // USD
        status: "Completed",
      },
      {
        orderId: "O008",
        orderDate: "2025-02-12",
        product: "Cups",
        quantityOrdered: 200,
        orderAmount: 300, // USD
        status: "Completed",
      },
    ],
  },
];

export default suppliersData;
