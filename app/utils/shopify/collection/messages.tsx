export const collectionMessage = (productCount: number) => {
  if (productCount === 1)
    return `<strong>${productCount}</strong> produto encontrado`;
  if (productCount > 1)
    return `<strong>${productCount}</strong> produtos encontrados`;
  return `Nenhum produto encontrado`;
};

export const filterMessage = (filterCount: number) => {
  if (filterCount === 1) return `Mostrar meu resultado`;
  if (filterCount > 1) return `Mostrar meus ${filterCount} resultados`;
  return 'Nenhum produto encontrado';
};

export const searchMessage = (searchCount: number) => {
  if (searchCount === 1) return `Foi encontrado ${searchCount} produto para:`;
  if (searchCount > 1) return `Foram encontrados ${searchCount} produtos para:`;
  return 'Nenhum produto encontrado';
};
