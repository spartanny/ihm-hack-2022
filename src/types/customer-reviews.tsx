// This is for individual reviews
export interface customerReviews {
  ratingGiven: number
  reviewTitle: string
  reviewText: string
  reviewDate: string
  reviewCountry: string
  reviewerName: string
}

// This is for overall rating
export interface overallReviews {
  overallRating: number
  totalReviews: number
  fiveStarCount: number
  fourStartCount: number
  threeStarCount: number
  twoStartCount: number
  oneStarCount: number
  valueForMoney: number
  easyToUse: number
}
