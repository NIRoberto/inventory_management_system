type OrderItem = {
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

type Order = {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  orderDate: string; // ISO 8601 format
  deliveryDate: string; // ISO 8601 format
  status: "Delivered" | "Shipped" | "Pending" | "Cancelled";
  items: OrderItem[];
  totalAmount: number;
  paymentStatus: "Paid" | "Unpaid" | "Refunded";
};

export const orderData: Order[] = [
  {
    id: 1,
    customerName: "John Doe",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1 234 567 8901",
    address: "123 Main Street, City, Country",
    orderDate: "2025-02-01T10:45:00Z",
    deliveryDate: "2025-02-03T15:00:00Z",
    status: "Delivered",
    items: [
      {
        productId: 101,
        productName: "Trainee Laptop",
        quantity: 1,
        unitPrice: 850,
        totalPrice: 850,
      },
      {
        productId: 102,
        productName: "Monitor",
        quantity: 2,
        unitPrice: 300,
        totalPrice: 600,
      },
    ],
    totalAmount: 1450,
    paymentStatus: "Paid",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    customerEmail: "jane.smith@example.com",
    customerPhone: "+1 234 567 8902",
    address: "456 Oak Avenue, City, Country",
    orderDate: "2025-02-02T11:00:00Z",
    deliveryDate: "2025-02-04T16:00:00Z",
    status: "Shipped",
    items: [
      {
        productId: 103,
        productName: "Employee Laptop",
        quantity: 1,
        unitPrice: 1200,
        totalPrice: 1200,
      },
      {
        productId: 104,
        productName: "Office Chair",
        quantity: 3,
        unitPrice: 150,
        totalPrice: 450,
      },
    ],
    totalAmount: 1650,
    paymentStatus: "Unpaid",
  },
  {
    id: 3,
    customerName: "Mike Johnson",
    customerEmail: "mike.johnson@example.com",
    customerPhone: "+1 234 567 8903",
    address: "789 Pine Road, City, Country",
    orderDate: "2025-02-03T14:15:00Z",
    deliveryDate: "2025-02-05T18:00:00Z",
    status: "Pending",
    items: [
      {
        productId: 105,
        productName: "Cleaning Material (Broom)",
        quantity: 5,
        unitPrice: 10,
        totalPrice: 50,
      },
      {
        productId: 106,
        productName: "Utensils (Plates)",
        quantity: 100,
        unitPrice: 5,
        totalPrice: 500,
      },
    ],
    totalAmount: 550,
    paymentStatus: "Unpaid",
  },
  {
    id: 4,
    customerName: "Emily Davis",
    customerEmail: "emily.davis@example.com",
    customerPhone: "+1 234 567 8904",
    address: "1010 Maple Lane, City, Country",
    orderDate: "2025-02-04T13:00:00Z",
    deliveryDate: "2025-02-06T20:00:00Z",
    status: "Cancelled",
    items: [
      {
        productId: 107,
        productName: "Trainee Laptop",
        quantity: 2,
        unitPrice: 850,
        totalPrice: 1700,
      },
    ],
    totalAmount: 1700,
    paymentStatus: "Refunded",
  },
  {
    id: 5,
    customerName: "David Lee",
    customerEmail: "david.lee@example.com",
    customerPhone: "+1 234 567 8905",
    address: "2021 Birch Street, City, Country",
    orderDate: "2025-02-05T12:30:00Z",
    deliveryDate: "2025-02-07T17:00:00Z",
    status: "Delivered",
    items: [
      {
        productId: 108,
        productName: "Monitor",
        quantity: 1,
        unitPrice: 300,
        totalPrice: 300,
      },
    ],
    totalAmount: 300,
    paymentStatus: "Paid",
  },
  {
    id: 6,
    customerName: "Sarah Wilson",
    customerEmail: "sarah.wilson@example.com",
    customerPhone: "+1 234 567 8906",
    address: "3030 Cedar Street, City, Country",
    orderDate: "2025-02-06T15:00:00Z",
    deliveryDate: "2025-02-08T19:00:00Z",
    status: "Shipped",
    items: [
      {
        productId: 109,
        productName: "Office Chair",
        quantity: 2,
        unitPrice: 150,
        totalPrice: 300,
      },
    ],
    totalAmount: 300,
    paymentStatus: "Paid",
  },
  {
    id: 7,
    customerName: "Chris Brown",
    customerEmail: "chris.brown@example.com",
    customerPhone: "+1 234 567 8907",
    address: "4040 Elm Street, City, Country",
    orderDate: "2025-02-07T10:45:00Z",
    deliveryDate: "2025-02-09T14:00:00Z",
    status: "Pending",
    items: [
      {
        productId: 110,
        productName: "Employee Laptop",
        quantity: 1,
        unitPrice: 1200,
        totalPrice: 1200,
      },
    ],
    totalAmount: 1200,
    paymentStatus: "Unpaid",
  },
  {
    id: 8,
    customerName: "Jessica Moore",
    customerEmail: "jessica.moore@example.com",
    customerPhone: "+1 234 567 8908",
    address: "5050 Ash Street, City, Country",
    orderDate: "2025-02-08T16:30:00Z",
    deliveryDate: "2025-02-10T18:00:00Z",
    status: "Shipped",
    items: [
      {
        productId: 111,
        productName: "Utensils (Plates)",
        quantity: 200,
        unitPrice: 5,
        totalPrice: 1000,
      },
    ],
    totalAmount: 1000,
    paymentStatus: "Paid",
  },
];
