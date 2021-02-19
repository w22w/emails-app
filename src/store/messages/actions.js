import { createActionsCreator } from 'store/actionCreatorsFactory'

const createAction = createActionsCreator('MESSAGES')

export const addMessage = createAction('ADD_MESSAGE')
export const clearMessages = createAction('CLEAR_MESSAGES')
export const markMessagesReadForUser = createAction('MARK_MESSAGES_READ_FOR_USER')
