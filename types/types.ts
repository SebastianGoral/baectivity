export interface IActivity {
  name: string;
  icon: string;
  id: string;
  amountOfResults: number;
  category: string;
}

export enum Category {
  SPORT = "Sport",
  CHILL = "Chill",
  ALL = "All",
}
