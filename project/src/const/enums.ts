export enum AppRoute {
  KeksId = ':id',
  AddReview = 'keks/:id/review',
  Main = '/',
  SignIn = '/sign-in/',
  Kekses = '/kekses/',
  Keks = '/kekses/:id',
  FavouriteList = '/favourlist',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HeroSize {
  Big = 'big',
  Small = 'small',
}

export enum RatingName {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum RatingValue {
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10,
}

export enum HeaderStyle {
  UserPage = 'user-page__head',
  KeksCard = 'keks-card__head',
}

export enum KeksNavigation {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum ApiAddress {
  Server = 'https://grading.design.pages.academy'
}
