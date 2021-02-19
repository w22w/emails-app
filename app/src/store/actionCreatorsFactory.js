import { createRoutine } from 'redux-saga-routines'

const identity = (value = {}) => value


const createActionsCreatorFlat = (zone_prefix, action_type, payloadCreator = identity, metaCreator = identity) => {
    const BASE_TYPE = `${zone_prefix}/${action_type}`

    return createRoutine(BASE_TYPE, payloadCreator, metaCreator)
}

export const createActionsCreator = (zone_prefix) => {
    return (action_type, payloadCreator = identity, metaCreator = identity) => {
        return createActionsCreatorFlat(zone_prefix, action_type, payloadCreator, metaCreator)
    }
}