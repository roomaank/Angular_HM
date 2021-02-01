import { Address } from "../models/Address";

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address
}