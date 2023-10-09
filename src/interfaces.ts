import { Price, HouseType, City, Country } from "./types";
import { LoyaltyLevel } from "./reviews";

export interface Properties {
  image: string;
  title: HouseType;
  price: Price;
  location: {
    firstLine: string;
    city: City;
    postcode: string | number;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyLevel;
  date: string;
  description?: string;
}

export interface User {
  userName: {
    firstName: string;
    lastName: string;
  };
  isReturning: boolean;
  age: number;
  stayedAt: string[];
}
