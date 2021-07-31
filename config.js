// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'my friend',
  imageBackground: true,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Hey,',
  greetingEvening: 'Good night,',
  greetingNight: 'You should go to sleep,',

  // Weather
  weatherKey: 'XXX',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  // Use https://www.latlong.net/
  weatherLatitude: 'XXX',
  weatherLongitude: 'XXX',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'twitch',
      link: 'https://twitch.tv/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'key',
  secondListIcon: 'tool',

  // Links
  lists: {
    firstList: [
      {
        name: 'Twitter',
        link: 'https://twitter.com/',
      },
      {
        name: 'THN',
        link: 'https://thehackernews.com/',
      },
      {
        name: 'Its FOSS',
        link: 'https://itsfoss.com/',
      },
      {
        name: 'EFF',
        link: 'https://www.eff.org/',
      },
    ],
    secondList: [
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
      {
        name: 'Github',
        link: 'https://github.com/',
      },
      {
        name: 'Hetzner',
        link: 'https://hetzner.com/',
      },
      {
        name: 'Protonmail',
        link: 'https://mail.protonmail.com/',
      },
    ],
  },
};
