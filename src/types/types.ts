export type Address = {
  title: string;
  detail: string;
  location: string;
};

export type City = {
  cityName: string;
  id: number;
};

const availableLanguages = ['en', 'tr'];

export type LanguageTag = (typeof availableLanguages)[number];
