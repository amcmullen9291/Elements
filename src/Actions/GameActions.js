import { ActionTypes } from '../Constants/Action.type';
export const setQuestions = (deck) => {
    return {
        type: ActionTypes.SET_QUESTIONS,
        payload: deck,
    }
}
