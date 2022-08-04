import { FAQ } from '../types/FAQ'
import { Product } from '../types/product-description'
import { OverallReviews } from '../types/customer-reviews'

export const FAQDataProduct1: FAQ[] = [
  {
    question:
      'Is it real wine, which we drink from alcohol shops, generally have low percent of alcohol?',
    answer:
      'It is a real wine without the alcohol. Not the ones which you get in liquor shops. Any beverage is considered non alcoholic if it contains not more than .5% by volume ethyl alcohol.',
    votes: 0,
    answeredBy: 'AMRITH ENTERPRISES',
    dateOfAnswer: '23 February, 2021',
  } as FAQ,
  {
    question: 'Is it good for skin glow?',
    answer: 'yes',
    votes: 0,
    answeredBy: 'AMRITH ENTERPRISES',
    dateOfAnswer: '9 August, 2021',
  } as FAQ,
  {
    question: 'Which country this vine is coming',
    answer: 'Tamilnadu, India',
    votes: 0,
    answeredBy: 'AMRITH ENTERPRISES',
    dateOfAnswer: '7 May, 2022',
  } as FAQ,
]

export const FAQDataProduct2: FAQ[] = [
  {
    question: 'Is the item durable?',
    answer: 'Yes',
    votes: 1,
    answeredBy: 'Seller',
    dateOfAnswer: '20 July 2022',
  } as FAQ,
  {
    question: 'Is this item easy to use?',
    answer: 'Yes',
    votes: 3,
    answeredBy: 'Seller',
    dateOfAnswer: '18 Feb 2022',
  } as FAQ,
  {
    question: 'What are the dimensions of this item?',
    answer: '15 x 15 x 5 Centimeters',
    votes: 5,
    answeredBy: 'Seller',
    dateOfAnswer: '23 March 2022',
  } as FAQ,
]

export const FAQDataProduct3: FAQ[] = [
  {
    question: 'Are these oats gluten freeor not?',
    answer:
      'Usually oats are gluten free.....if you are more concerned about gluten then you can go for gluten free Quaker Oats ,it is also available',
    votes: 7,
    answeredBy: 'Seller',
    dateOfAnswer: '12 August, 2020',
  } as FAQ,
  {
    question: 'What is the manufactured and expiry date?',
    answer: 'Expiray date is 12 months after the manufactured date.',
    votes: 10,
    answeredBy: 'Seller',
    dateOfAnswer: '9 October, 2021',
  } as FAQ,
  {
    question: 'Can I use these oats on my hairs(as conditioner)?',
    answer: 'by any chance do u eat conditioner in breakfast? jk. NO.',
    votes: 12,
    answeredBy: 'Seller',
    dateOfAnswer: '18 May, 2022',
  } as FAQ,
]

export const ProductData: Product[] = [
  {
    name: 'WILLIAMS WINE Red Violet Non Alcoholic Wine',
    asin: 'B08NSXCZRV',
    cutomerReviews: 3.8,
    bestSellerRank: 101,
    launchDate: '18 November 2020',
    manufacturer: 'AMRITH ENTERPRISES',
    dimensions: '32.7 x 9.5 x 8.9 cm',
    itemModelNumber: 'Fruit Wine',
    weight: '1.51 Kilograms',
    about:
      "William's Wine non alcoholic Red Violet is a light-bodied wine with a rich aroma and light tannic structure, balanced with hints of spice and oak bouquets for an accent of depth and texture with every sip.",
  } as Product, // https://amzn.eu/d/9Q9OUvx
  {
    name: 'Organic Nuts 100% Natural Premium Californian Almonds',
    asin: 'B08JM17CKD',
    cutomerReviews: 4.0,
    bestSellerRank: 88,
    launchDate: '21 September 2020',
    manufacturer: 'Minerva Tradewell',
    dimensions: '15 x 15 x 5 Centimeters',
    itemModelNumber: 'QX-RYC7-ESY1',
    weight: '400g',
    about:
      'They are highly nutritious and rich in healthy fats, antioxidants, vitamins and minerals.You can eat almonds raw or toasted as a snack or add them to sweet or savory dish. Store in a cool, dry place in an airtight container and preferably refrigerate after opening Organic Nuts: We Work!! Because We Have Quality.',
  } as Product, // https://amzn.eu/d/6cNg5Ly
  {
    name: 'Quaker Oats 2kg, 100% natural wholegrain',
    asin: 'B01LYEV6RF',
    cutomerReviews: 4.5,
    bestSellerRank: 1,
    launchDate: '5 October 2016',
    manufacturer: 'PEPSICO INDIA HOLDING PVT LTD',
    dimensions: '105.6 x 54.3 x 32.5 Centimeters',
    itemModelNumber: '8901491703055',
    weight: '2kg',
    about:
      '100% Natural Wholegrain Oats : Rolled oats in your choice of pack size Oats 1kg, Oats 2kg, Oats 1.5kg',
  } as Product, // https://amzn.eu/d/ftvdSh5
]

export const overallReviews: OverallReviews[] = [
  {
    overallRating: 3.8,
    totalReviews: 386,
    fiveStarCount: '47%',
    fourStarCount: '21%',
    threeStarCount: '13%',
    twoStarCount: '7%',
    oneStarCount: '13%',
    valueForMoney: 3.8,
    easyToUse: 3.1,
  } as OverallReviews,
  {
    overallRating: 4.0,
    totalReviews: 30,
    fiveStarCount: '47%',
    fourStarCount: '26%',
    threeStarCount: '17%',
    twoStarCount: '0%',
    oneStarCount: '10%',
    valueForMoney: 3.6,
    easyToUse: 3.8,
  } as OverallReviews,
  {
    overallRating: 4.5,
    totalReviews: 28771,
    fiveStarCount: '68%',
    fourStarCount: '23%',
    threeStarCount: '6%',
    twoStarCount: '1%',
    oneStarCount: '2%',
    valueForMoney: 4.5,
    easyToUse: 4.4,
  } as OverallReviews,
]
