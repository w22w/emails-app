import { createSelector } from 'reselect'
import appConstants from 'common/appConstants'
import _ from 'lodash/core'

export const getMessagesState = createSelector(
    [
        (state) => {
            return state[ appConstants.store.route.messages ]
        },
    ],
    (messagesState) => messagesState,
)

export const getMessagesInbox = createSelector(
    [
        getMessagesState
    ],
    (messagesState) => {
        try {
            return messagesState[ appConstants.destinations.inbox ] ? messagesState[ appConstants.destinations.inbox ] : {}
        } catch (e) {
        }
        return {}
    },
)

export const getMessagesOutbox = createSelector(
    [
        getMessagesState
    ],
    (messagesState) => {
        try {
            return messagesState[ appConstants.destinations.outbox ] ? messagesState[ appConstants.destinations.outbox ] : {}
        } catch (e) {
        }
        return {}
    },
)

export const getMessagesInboxAll = createSelector(
    [
        getMessagesInbox,
    ],
    (messages) => {
        try {
            return messages.all ? messages.all : {}
        } catch (e) {
        }
        return {}
    },
)

export const getMessagesInboxOrdered = createSelector(
    [
        getMessagesInbox,
    ],
    (messages) => {
        try {
            return messages.ordered ? messages.ordered : []
        } catch (e) {
        }
        return []
    },
)

export const getMessagesOutboxAll = createSelector(
    [
        getMessagesOutbox,
    ],
    (messages) => {
        try {
            return messages.all ? messages.all : {}
        } catch (e) {
        }
        return {}
    },
)
export const getMessagesOutboxOrdered = createSelector(
    [
        getMessagesOutbox,
    ],
    (messages) => {
        try {
            return messages.ordered ? messages.ordered : []
        } catch (e) {
        }
        return []
    },
)

export const getMessagesInboxById = createSelector(
    [
        getMessagesInboxAll,
        (state, id) => id
    ],
    (messages, id) => {
        try {
            return messages[ id ] ? messages[ id ] : null
        } catch (e) {
        }
        return null
    },
)
export const getMessagesInboxByIdSubject = createSelector(
    [
        getMessagesInboxById
    ],
    (message) => {
        try {
            return message[ 'subject' ] ? message[ 'subject' ] : ''
        } catch (e) {
        }
        return ''
    },
)
export const getMessagesInboxByIdBody = createSelector(
    [
        getMessagesInboxById
    ],
    (message) => {
        try {
            return message[ 'body' ] ? message[ 'body' ] : ''
        } catch (e) {
        }
        return ''
    },
)

export const getMessagesOutboxById = createSelector(
    [
        getMessagesOutboxAll,
        (state, id) => id
    ],
    (messages, id) => {
        try {
            return messages[ id ] ? messages[ id ] : null
        } catch (e) {
        }
        return null
    },
)

export const getMessagesOutboxByIdSubject = createSelector(
    [
        getMessagesOutboxById
    ],
    (message) => {
        try {
            return message[ 'subject' ] ? message[ 'subject' ] : ''
        } catch (e) {
        }
        return ''
    },
)
export const getMessagesOutboxByIdBody = createSelector(
    [
        getMessagesOutboxById
    ],
    (message) => {
        try {
            return message[ 'body' ] ? message[ 'body' ] : ''
        } catch (e) {
        }
        return ''
    },
)

export const getMessagesAll = createSelector(
    [
        getMessagesInboxAll,
        getMessagesOutboxAll,
    ],
    (inbox, outbox) => {
        try {
            return {
                ...inbox,
                ...outbox
            }
            
        } catch (e) {
        }
        return {}
    }
)

export const getMessagesAllById = createSelector(
    [
        getMessagesAll,
        (state, id) => id
    ],
    (all, id) => {
        try {
            return all[ id ] ? all[ id ] : null
            
        } catch (e) {
        }
        return null
    }
)

export const getMessagesAllByUserId = createSelector(
    [
        getMessagesAll,
        (state, id) => id
    ],
    (all, userId) => {
        try {
            return _.chain(all)
            .filter(message => message.userId === userId)
            .sort((a, b) => a.createdAt - b.createdAt)
            .value()
        } catch (e) {
        }
        return []
    },
)

export const getMessagesAllByIdIsInbox = createSelector(
    [
        getMessagesAllById,
    ],
    (message) => {
        try {
            return message ? message.destination === appConstants.destinations.inbox : false
            
        } catch (e) {
        }
        return false
    }
)

export const getMessagesAllByIdIsOutbox = createSelector(
    [
        getMessagesAllById,
    ],
    (message) => {
        try {
            return message ? message.destination === appConstants.destinations.outbox : false
            
        } catch (e) {
        }
        return false
    }
)

export const getMessagesAllByIdSubject = createSelector(
    [
        getMessagesAllById,
    ],
    (message) => {
        try {
            return message[ 'subject' ] ? message[ 'subject' ] : ''
            
        } catch (e) {
        }
        return ''
    }
)

export const getMessagesAllByIdBody = createSelector(
    [
        getMessagesAllById,
    ],
    (message) => {
        try {
            return message[ 'body' ] ? message[ 'body' ] : ''
            
        } catch (e) {
        }
        return ''
    }
)
export const getMessagesAllByIdIsRead = createSelector(
    [
        getMessagesAllById,
    ],
    (message) => {
        try {
            return message[ 'read' ] ? !!message[ 'read' ] : false
            
        } catch (e) {
        }
        return false
    }
)

