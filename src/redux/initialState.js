export const initialState = {
  posts: {
    data: [
      {
        id: 1,
        title: 'Location Camping Car',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        datePublication: '2022.05.20',
        dateLastUpdate: '2022.03.23',
        email: 'julia@lorem.com',
        status: 'published',
        image:
          'https://images.pexels.com/photos/7967398/pexels-photo-7967398.jpeg?cs=srgb&dl=pexels-kampus-production-7967398.jpg&fm=jpg',
        price: '450$',
        phone: '+48 884805555',
        location: 'Madrid',
      },
      {
        id: 2,
        title: 'Location boat',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        datePublication: '2022.05.15',
        dateLastUpdate: '2022.05.18',
        email: 'konrad@lorem.com',
        status: 'closed',
        image:
          'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '150$',
        phone: '+48 884877775',
        location: 'Bali',
      },
      {
        id: 3,
        title: 'Location 4x4',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        datePublication: '2022.05.10',
        dateLastUpdate: '2022.05.15',
        email: 'justy@lorem.com',
        status: 'draft',
        image:
          'https://images.pexels.com/photos/12121568/pexels-photo-12121568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '120$',
        phone: '+48 884806835',
        location: 'Florid',
      },
      {
        id: 4,
        title: 'location plane',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        datePublication: '2022.04.23',
        dateLastUpdate: '2022.04.29',
        email: 'manuela@lorem.com',
        status: 'published',
        image:
          'https://images.pexels.com/photos/8147302/pexels-photo-8147302.jpeg?cs=srgb&dl=pexels-trippy-clicker-8147302.jpg&fm=jpg',
        price: '1500$',
        phone: '+48 884806835',
        location: 'Paris',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    active: true,
  },
};
