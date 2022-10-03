import { combineReducers } from 'redux';
import { Todo } from '../actions';
import { todosReducer } from './todos';

export interface StoreState {
  todo: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
