import { AppDispatch } from '../index'
import { errorFetching, startFetching, successFetching } from './categories.slice'
import axios from 'axios'

export const fetchCategories = () => async (dispatch: AppDispatch) => {
   try {
      dispatch(startFetching())
      const response = await axios.get<ICategory[]>(
         'http://localhost:5000/categories/category'
      )
      dispatch(successFetching(response.data))
   } catch (e) {
      if (e instanceof Error) {
         dispatch(errorFetching(e.message))
      }
   }
}
