import appConstants from "common/appConstants";
import produce from "immer";
import * as ACTIONS from "./actions";

export const initialState = {
  users: {},
  [ appConstants.destinations.inbox ]: {},
  [ appConstants.destinations.outbox ]: {},
};

const usersReducer = (initState = { ...initialState }, action = {}) =>
    produce(initState, (state) => {
      switch (action.type) {
        case ACTIONS.updateUser.REQUEST: {
          return;
        }
        case ACTIONS.updateUser.SUCCESS: {
          const { user, destination, createdAt, messageId } = action.payload;
          if (user && user.userId) {
            state.users[ user.userId ] = { ...user };
          }
          if (state[ destination ]) {
            if (state[ destination ][ user.userId ]) {
              state[ destination ][ user.userId ].count += 1;
              state[ destination ][ user.userId ].lastUpdate = createdAt;
              state[ destination ][ user.userId ].lastMessageId = messageId;
            } else {
              state[ destination ][ user.userId ] = {
                count: 1,
                lastUpdate: createdAt,
                lastMessageId: messageId
              };
            }
          }
          return;
        }
        case ACTIONS.updateUser.FAILURE: {
          return;
        }
        
        case ACTIONS.markAllRead.SUCCESS: {
          const { userId } = action.payload
          if (state[ appConstants.destinations.inbox ][ userId ]) {
            state[ appConstants.destinations.inbox ][ userId ].count = 0
          }
          if (state[ appConstants.destinations.outbox ][ userId ]) {
            state[ appConstants.destinations.outbox ][ userId ].count = 0
          }
          return;
        }
        case ACTIONS.clearUsers.SUCCESS: {
          return {
            ...initState
          }
        }
        
        default: {
          return;
        }
      }
    });

export default usersReducer
