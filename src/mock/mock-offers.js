const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3a',
        title: 'Upgrade to a business class',
        price: 35,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3b',
        title: 'Im in a hurry',
        price: 20,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3c',
        title: 'Choose music station',
        price: 5,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3d',
        title: 'Add an intermediate point',
        price: 10,
        isChoosen: Math.random() > 0.5
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3e',
        title: 'Add lunch',
        price: 10,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3f',
        title: 'Comfort seats',
        price: 20,
        isChoosen: Math.random() > 0.5
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3j',
        title: 'A separate compartment',
        price: 30,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3h',
        title: 'Lunch in the dining car',
        price: 15,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3i',
        title: 'Hygiene supplies',
        price: 10,
        isChoosen: Math.random() > 0.5
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3j',
        title: 'Spacious cabin',
        price: 20,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3k',
        title: 'Access to the VIP area',
        price: 25,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3o',
        title: 'Lunch at the restaurant',
        price: 30,
        isChoosen: Math.random() > 0.5
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3p',
        title: 'A multi-seat car',
        price: 30,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3q',
        title: 'Rent A-Class car',
        price: 40,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3r',
        title: 'Rent S-Class car',
        price: 60,
        isChoosen: Math.random() > 0.5
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3s',
        title: 'Switch to comfort class',
        price: 70,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3t',
        title: 'Add meal',
        price: 20,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3u',
        title: 'Add luggage',
        price: 30,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3v',
        title: 'Choose seats',
        price: 10,
        isChoosen: Math.random() > 0.5
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3w',
        title: 'Room for two',
        price: 30
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3x',
        title: 'Cleaning',
        price: 20,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3y',
        title: 'Breakfast in the room',
        price: 20,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3z',
        title: 'Access to the mini-bar',
        price: 50,
        isChoosen: Math.random() > 0.5
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Guide services',
        price: 20,
        isChoosen: Math.random() > 0.5
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
        title: 'Ready-made routes',
        price: 50,
        isChoosen: Math.random() > 0.5
      }
    ]
  },
  {
    type: 'restaurant',
    offers: []
  },
];

export default function getOffersByType(type) {
  return mockOffers.find((offer) => offer.type === type).offers;
}
