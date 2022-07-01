import { AppDispatch } from '../index'
import { errorFetching, startFetching, successFetching } from './products.slice'
import axios from 'axios'

export const fetchProducts = () => async (dispatch: AppDispatch) => {
   try {
      dispatch(startFetching())
      const response = await axios.get<IProduct[]>(
         'http://localhost:5000/products'
      )
      dispatch(successFetching(response.data))
   } catch (e) {
      if (e instanceof Error) {
         dispatch(errorFetching(e.message))
      }
   }
}
