// This is for individual reviews
export interface CustomerReviews {
  ratingGiven: number
  reviewTitle: string
  reviewText: string
  reviewDate: string
  reviewCountry: string
  reviewerName: string
}

// This is for overall rating
export interface OverallReviews {
  overallRating: number
  totalReviews: number
  fiveStarCount: string
  fourStarCount: string
  threeStarCount: string
  twoStarCount: string
  oneStarCount: string
  valueForMoney: number
  easyToUse: number
}
