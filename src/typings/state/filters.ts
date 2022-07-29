export interface IFilters {
  filters: {
    image: string[];
    title: string[];
    categoryId: string[];
    description: string[];
    imageDetail: [string][];
    price: number[];
    quantity: number[];
  }
  checked: string[];
}
