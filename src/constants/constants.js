export const projects = [
  {
    title: 'Crypto Dashboard UI',
    description:
      'A comprehensive Dashboard UI created with Next.js and Tailwind CSS',
    image: '/images/Dashboard.png',
    tags: ['Next.js', 'Tailwind'],
    source:
      'https://github.com/akhilbhadrangirija/admin-pannel/tree/master/trade-mask',
    visit:
      'https://github.com/akhilbhadrangirija/admin-pannel/tree/master/trade-mask',
    id: 0
  },
  {
    title: 'Shoof E-Commerce',
    description: 'A full stack MERN application for an ecommerce company',
    // image: '/images/shoof.png',
    image: {`&{process.env.IMAGES}/images/shoof.png`},
    tags: ['React', 'MongoDB', 'Express', 'Node'],
    source: 'https://github.com/akhilbhadrangirija/shoof-ecommerce',
    visit: 'https://github.com/akhilbhadrangirija/shoof-ecommerce',
    id: 1
  },
  {
    title: 'Spotify Profile',
    description:
      'Web app for visualizing personalised Spotify data,created with React and Express.',
    image: '/images/spotify.jpg',
    tags: ['React', 'Node', 'Express'],
    source: 'https://spotify-profile-visualize.herokuapp.com/',
    visit: 'https://spotify-profile-visualize.herokuapp.com/',
    id: 2
  },
  {
    title: 'Truckman',
    description:
      'Modern static Website of a foodjoint with multiple pages with an online menu.',
    image: '/images/truckman.jpg',
    tags: ['HTML', 'CSS'],
    source: 'https://akhilbhadrangirija.github.io/Digitalmenu-Truck/',
    visit: 'https://akhilbhadrangirija.github.io/Digitalmenu-Truck/',
    id: 3
  }
]
