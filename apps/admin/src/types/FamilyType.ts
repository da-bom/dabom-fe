export interface Customer {
  customerId: number;
  name: string;
}

export interface Family {
  familyId: number;
  familyName: string;
  customerCount: number;
  customers: Customer[];
  createdAt: string;
}
