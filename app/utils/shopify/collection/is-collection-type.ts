export const isCollectionType = (item: {[key: PropertyKey]: any}) =>
  item.type === 'COLLECTION' && item.resource;
