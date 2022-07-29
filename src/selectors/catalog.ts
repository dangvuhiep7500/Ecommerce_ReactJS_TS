import { createSelector } from 'reselect';
import { ICatalogProduct } from '../typings/state/catalogProduct';
import { TSortBy,IStates } from '../typings/state/index';


export const isCatalogLoaded = (state: IStates) => state.catalog.isLoaded;
export const selectSortBy = (state: IStates) => state.sortBy;
export const selectFilters = (state: IStates) => state.filters;
export const selectProducts = (state: IStates) => state.catalog.items;

export const sortProducts = (catalog: ICatalogProduct[], sortBy: TSortBy) => {
  switch (sortBy) {
    case 'Tên (A - Z)':
      return catalog.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    case 'Tên (Z - A)':
      return catalog.sort((a, b) => (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0));
    case 'Giá (Thấp - Cao)':
      return catalog.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    case 'Giá (Cao - Thấp)':
      return catalog.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
    default:
      return catalog;
  }
};

export const filterProducts = createSelector(
  [selectProducts, selectFilters],
  () => {}
);
