const appConstants = {
  store: {
    route: {
      messages: "messages",
      users: "users",
    },
  },
  router: {
    root: "/emails-app/",
    sendForm: "/emails-app/sendform",
    inbox: "/emails-app/inbox",
    outbox: "/emails-app/outbox",
  },
  destinations: {
    inbox: 'inbox',
    outbox: 'outbox'
  },
  events: {
    scroll: 'scroll'
  },
  scroll: {
    direction: {
      down: 'down',
      top: 'top'
    }
  }
};

export default appConstants;
