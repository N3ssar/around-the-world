import { type ReactNode } from "react";
export interface Country {
  name: {
    common: string;
    nativeName?: {
      [key: string]: { common: string; official: string };
    };
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: { name: string; symbol: string };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
  cca3: string;
}

export type CountryCardData = Pick<
  Country,
  "name" | "population" | "capital" | "region" | "flags" | "cca3"
>;

export interface ShowMessageProps {
  children: ReactNode;
  className?: string;
}
export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export interface RegionOption {
  value: string;
  label: string;
}

export interface BorderCountry {
  name: {
    common: string;
  };
  cca3: string;
}