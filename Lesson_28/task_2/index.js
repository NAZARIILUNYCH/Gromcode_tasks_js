const favorites = ['id-2'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};

// eslint-disable-next-line no-shadow
const markFavorites = (tree, favorites) => {
  const isFavorites = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorites,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};
