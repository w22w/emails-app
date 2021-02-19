import appConstants from "common/appConstants";
import produce from "immer";
import * as ACTIONS from "./actions";
import _ from 'lodash/core'

export const initialState = {
    [ appConstants.destinations.inbox ]: {
        all: {},
        ordered: []
    },
    [ appConstants.destinations.outbox ]: {
        all: {},
        ordered: []
    },
};

const messagesReducer = (initState = { ...initialState }, action = {}) =>
    produce(initState, (state) => {
        switch (action.type) {
            case ACTIONS.addMessage.REQUEST: {
                return;
            }
            case ACTIONS.addMessage.SUCCESS: {
                const { messageId, destination } = action.payload
                if (messageId) {
                    state[ destination ].all[ messageId ] = { ...action.payload, read: false }
                    state[ destination ].ordered.push(messageId)
                }
                return;
            }
            
            case ACTIONS.markMessagesReadForUser.SUCCESS: {
                const { userId } = action.payload
                if (userId) {
                    _.forEach(state[ appConstants.destinations.inbox ].all, (message) => {
                        if (message.userId === userId) {
                            state[ appConstants.destinations.inbox ].all[ message.messageId ].read = true
                        }
                    })
                    _.forEach(state[ appConstants.destinations.outbox ].all, (message) => {
                        if (message.userId === userId) {
                            state[ appConstants.destinations.outbox ].all[ message.messageId ].read = true
                        }
                    })
                }
                return;
            }
            
            case ACTIONS.addMessage.FAILURE: {
                return;
            }
            
            case ACTIONS.clearMessages.SUCCESS: {
                return {
                    ...initialState
                }
            }
            
            default: {
                return;
            }
        }
    });

export default messagesReducer
