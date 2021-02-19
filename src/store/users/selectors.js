import { createSelector } from 'reselect'
import appConstants from 'common/appConstants'
import _ from 'lodash/core'

export const getUsersState = createSelector(
    [
        (state) => {
            return state[ appConstants.store.route.users ]
        },
    ],
    (usersState) => usersState,
)

export const getUsersAll = createSelector(
    [
        getUsersState
    ],
    (usersState) => {
        try {
            return usersState.users ? usersState.users : {}
        } catch (e) {
        }
        return {}
    },
)

export const getUsersAllById = createSelector(
    [
        getUsersAll,
        (state, id) => id
    ],
    (users, id) => {
        try {
            return users[ id ] ? users[ id ] : null
        } catch (e) {
        }
        return null
    },
)

export const getUsersAllByIdUserName = createSelector(
    [
        getUsersAllById,
    ],
    (user) => {
        try {
            return user[ 'username' ] ? user[ 'username' ] : ''
        } catch (e) {
        }
        return ''
    },
)

export const getUsersInbox = createSelector(
    [
        getUsersState
    ],
    (usersState) => {
        try {
            return usersState[ appConstants.destinations.inbox ] ? usersState[ appConstants.destinations.inbox ] : {}
        } catch (e) {
        }
        return {}
    },
)
export const getUsersOutbox = createSelector(
    [
        getUsersState
    ],
    (usersState) => {
        try {
            return usersState[ appConstants.destinations.outbox ] ? usersState[ appConstants.destinations.outbox ] : {}
        } catch (e) {
        }
        return {}
    },
)

export const getUsersInboxById = createSelector(
    [
        getUsersInbox,
        (state, id) => id
    ],
    (users, userId) => {
        try {
            return users[ userId ] ? users[ userId ] : {}
        } catch (e) {
        }
        return {}
    },
)
export const getUsersOutboxById = createSelector(
    [
        getUsersOutbox,
        (state, id) => id
    ],
    (users, userId) => {
        try {
            return users[ userId ] ? users[ userId ] : {}
        } catch (e) {
        }
        return {}
    },
)

export const getUsersInboxByIdCount = createSelector(
    [
        getUsersInboxById
    ],
    (user) => {
        try {
            return user[ 'count' ] ? user[ 'count' ] : 0
        } catch (e) {
        }
        return 0
    },
)
export const getUsersInboxByIdLastUpdate = createSelector(
    [
        getUsersInboxById
    ],
    (user) => {
        try {
            return user[ 'lastUpdate' ] ? user[ 'lastUpdate' ] : 0
        } catch (e) {
        }
        return 0
    },
)
export const getUsersInboxByIdLastMessageId = createSelector(
    [
        getUsersInboxById
    ],
    (user) => {
        try {
            return user[ 'lastMessageId' ] ? user[ 'lastMessageId' ] : 0
        } catch (e) {
        }
        return 0
    },
)
export const getUsersOutboxByIdCount = createSelector(
    [
        getUsersOutboxById
    ],
    (user) => {
        try {
            return user[ 'count' ] ? user[ 'count' ] : 0
        } catch (e) {
        }
        return 0
    },
)
export const getUsersOutboxByIdLastUpdate = createSelector(
    [
        getUsersOutboxById
    ],
    (user) => {
        try {
            return user[ 'lastUpdate' ] ? user[ 'lastUpdate' ] : 0
        } catch (e) {
        }
        return 0
    },
)
export const getUsersOutboxByIdLastMessageId = createSelector(
    [
        getUsersOutboxById
    ],
    (user) => {
        try {
            return user[ 'lastMessageId' ] ? user[ 'lastMessageId' ] : 0
        } catch (e) {
        }
        return 0
    },
)

export const getUsersInboxWithMessages = createSelector(
    [
        getUsersInbox
    ],
    (users) => {
        try {
            return _.chain(users)
            .map((user, id) => {
                return {
                    id,
                    ...user,
                }
            })
            .sort((a, b) => {
                return b.lastUpdate - a.lastUpdate
            })
            .value()
        } catch (e) {
            console.log(e)
        }
        return []
    },
)
export const getUsersOutboxWithMessages = createSelector(
    [
        getUsersOutbox
    ],
    (users) => {
        try {
            return _.chain(users)
            .map((user, id) => {
                return {
                    id,
                    ...user,
                }
            })
            .value()
        } catch (e) {
        }
        return []
    },
)
