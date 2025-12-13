import { UserStatus } from './user-status.enum';

export interface User {
  id: number;
  name: string;
  status: UserStatus;
  address: {
    city: string;
    street: string;
  };
  hobbies: string[];
}
