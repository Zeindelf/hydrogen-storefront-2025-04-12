import type {
  ProductCollectionSortKeys,
  ProductSortKeys,
  SearchSortKeys,
} from '@shopify/hydrogen/storefront-api-types';

export const sortValues: SortValue[] = [
  {label: 'Relevância', sortKey: 'default'}, // Em destaque
  {label: 'Lançamentos', sortKey: 'created-desc'}, // Lançamentos
  {label: 'Mais Vendidos', sortKey: 'best-asc'}, // Mais vendidos
  {label: 'Menor Preço', sortKey: 'price-asc'}, // Preço, ordem crescente
  {label: 'Maior Preço', sortKey: 'price-desc'}, // Preço, order decrescente
  {label: 'Ordem alfabética, A a Z', sortKey: 'name-asc'}, // Ordem alfabética, A - Z
  {label: 'Ordem alfabética, Z a A', sortKey: 'name-desc'}, // Ordem alfabética, Z - A
  {label: 'Data, mais recente primeiro', sortKey: 'created-descending'}, // Data de lançamento
  {label: 'Data, mais antiga primeiro', sortKey: 'created-ascending'},
];

/** Default sorting allowed for searches */
export const searchSortValues: SortValue[] = [
  {label: 'Relevância', sortKey: 'default'},
  {label: 'Menor Preço', sortKey: 'price-asc'},
  {label: 'Maior Preço', sortKey: 'price-desc'},
];

export type SortValue = {
  label: string;
  sortKey: SortParams;
};

export type SortParams = (typeof sortParams)[number];

const getSortKey = (
  sortParam: null | SortParams,
  type: 'collection' | 'product',
) => {
  const lowerSortParam = sortParam?.toLowerCase();

  switch (lowerSortParam) {
    case 'best-asc':
    case 'best-selling':
    case 'orderbytopsaledesc':
      return {
        reverse: false,
        sortKey: 'BEST_SELLING' as const,
      };

    case 'created-asc':
    case 'created-ascending':
    case 'orderbyreleasedateasc':
      return {
        reverse: false,
        sortKey:
          type === 'collection'
            ? ('CREATED' as const)
            : ('CREATED_AT' as const),
      };

    case 'created-desc':
    case 'created-descending':
    case 'orderbyreleasedatedesc':
      return {
        reverse: true,
        sortKey:
          type === 'collection'
            ? ('CREATED' as const)
            : ('CREATED_AT' as const),
      };

    case 'featured-asc':
    case 'orderbyfeaturedasc':
      return {
        reverse: false,
        sortKey: 'MANUAL' as const,
      };

    case 'featured-desc':
    case 'orderbyfeatureddesc':
      return {
        reverse: true,
        sortKey: 'MANUAL' as const,
      };

    case 'name-asc':
    case 'orderbynameasc':
    case 'title-ascending':
      return {
        reverse: false,
        sortKey: 'TITLE' as const,
      };

    case 'name-desc':
    case 'orderbynamedesc':
    case 'title-descending':
      return {
        reverse: true,
        sortKey: 'TITLE' as const,
      };

    case 'orderbypriceasc':
    case 'price-asc':
    case 'price-ascending':
      return {
        reverse: false,
        sortKey: 'PRICE' as const,
      };

    case 'orderbypricedesc':
    case 'price-desc':
    case 'price-descending':
      return {
        reverse: true,
        sortKey: 'PRICE' as const,
      };

    default:
      return {
        reverse: false,
        sortKey: undefined,
      };
  }
};

export const getSortValue = (key: SortParams) =>
  key ? sortValues.find((value) => value.sortKey === key)?.label : '';

// Product Collection
export const collectionSort = (sortParam: null | SortParams) => {
  return getSortKey(sortParam, 'collection') as {
    reverse: boolean;
    sortKey?: ProductCollectionSortKeys;
  };
};

// Product Search
export const searchSort = (sortParam: null | SortParams) => {
  return getSortKey(sortParam, 'collection') as {
    reverse: boolean;
    sortKey?: SearchSortKeys;
  };
};

// Product Search By Query
export const productSort = (sortParam: null | SortParams) => {
  return getSortKey(sortParam, 'product') as {
    reverse: boolean;
    sortKey?: ProductSortKeys;
  };
};

export const sortParams = [
  'default',
  // Random (Manual) | Lançamentos
  'featured-asc',
  'orderbyfeaturedasc', // 'OrderByFeaturedASC'
  //
  'featured-desc',
  'orderbyfeatureddesc', // 'OrderByFeaturedDESC'
  // Best Selling | Mais Vendidos
  'best-asc',
  'best-selling',
  'orderbytopsaledesc', // 'OrderByTopSaleDESC'
  // Name, A-Z | De A a Z
  'name-asc',
  'title-ascending',
  'orderbynameasc', // 'OrderByNameASC'
  // Name, Z-A | De Z a A  //
  'name-desc',
  'title-descending',
  'orderbynamedesc', // 'OrderByNameDESC'
  // Price, low to high | Menor Preço
  'price-asc',
  'price-ascending',
  'orderbypriceasc', // 'OrderByPriceASC'
  // Price, high to low | Maior Preço
  'price-desc',
  'price-descending',
  // 'OrderByPriceDESC',
  'orderbypricedesc', // 'OrderByPriceDESC'
  // Date, old to new | Mais Recentes
  'created-asc',
  'created-ascending',
  'orderbyreleasedateasc', // 'OrderByReleaseDateASC'
  // Date, new to old | Mais Antigos
  'created-desc',
  'created-descending',
  'orderbyreleasedatedesc', // 'OrderByReleaseDateDESC'
] as const;

export const isValidSortQuery = (sortQuery: SortParams) =>
  sortQuery === 'default' ||
  !sortParams.includes(sortQuery?.toLowerCase() as SortParams);
