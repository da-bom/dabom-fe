export type NegotiationType = 'APPEAL' | 'EMERGENCY';
export type NegotiationStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';

export interface Author {
  customerId: number;
  name: string;
}

export interface Message {
  messageId: number;
  author: Author;
  message: string;
  createdAt: string;
}

export interface Negotiation {
  negotiationId: number;
  type: NegotiationType;
  status: NegotiationStatus;
  requestedBytes: number;
  reason: string;
  requester: Author;
  resolver: Author | null;
  resolvedAt: string | null;
  createdAt: string;
  updatedAt: string;
  messages: Message[];
}

export interface NegotiationResponse {
  success: boolean;
  data: {
    content: Negotiation[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}
