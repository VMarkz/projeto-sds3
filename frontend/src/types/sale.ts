<<<<<<< HEAD
import { type } from "os";
import { Seller } from "./seller";

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean
    numberOfElements?: number;
    empty?: boolean;
}

export type SaleSuccess = {
    sellerName : string;
    visited : number;
    deals : number;
=======
export type SaleSum = {
    sellerName: string,
    sum: number
>>>>>>> 56fd386e4ee5d80ccd089c0439452d15520e4c9c
}