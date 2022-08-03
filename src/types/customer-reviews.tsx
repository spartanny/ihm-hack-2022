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
  fourStartCount: string
  threeStarCount: string
  twoStartCount: string
  oneStarCount: string
  valueForMoney: number
  easyToUse: number
}
