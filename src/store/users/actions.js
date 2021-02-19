import { createActionsCreator } from 'store/actionCreatorsFactory'

const createAction = createActionsCreator('USERS')

export const updateUser = createAction('UPDATE')
export const clearUsers = createAction('CLEAR')
export const markAllRead = createAction('MARK_ALL_READ')
