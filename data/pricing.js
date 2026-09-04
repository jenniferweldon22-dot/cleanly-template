// Edit this file to customize the pricing packages shown throughout the website.

export const plans = [
  {
    name: 'Essential',
    description: 'A solid standard clean for maintaining a tidy home.',
    price: 120,
    features: [
      'Up to 2 bedrooms',
      'Kitchen & bathrooms',
      'Dusting & vacuuming',
      'Trash removal',
    ],
    featured: false,
  },

  {
    name: 'Complete',
    description: 'Our most popular package for a deeper, more thorough clean.',
    price: 220,
    features: [
      'Up to 4 bedrooms',
      'Everything in Essential',
      'Inside oven & fridge',
      'Baseboards & windowsills',
    ],
    featured: true,
  },

  {
    name: 'Premium',
    description: 'Full-service deep clean for larger homes or move-in/move-out.',
    price: 320,
    features: [
      '5+ bedrooms',
      'Everything in Complete',
      'Wall spot cleaning',
      'Cabinet interiors',
    ],
    featured: false,
  },
]