import { RouterState} from 'connected-react-router';
import { ICatalog } from './catalog';
import { TSortBy } from './sortBy';
import { IFilters } from './filters';
export interface IStates{
  router: RouterState;
  catalog: ICatalog;
  sortBy: TSortBy;
  filters: IFilters;
}
