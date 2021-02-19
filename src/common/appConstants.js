const appConstants = {
  store: {
    route: {
      messages: "messages",
      users: "users",
    },
  },
  router: {
    root: "/",
    sendForm: "/sendform",
    inbox: "/inbox",
    outbox: "/outbox",
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
