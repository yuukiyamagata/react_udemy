
const items = [
  {id: 1, name: 'あああ'},
  {id: 2, name: 'いいい'},
  {id: 3, name: 'ううう'},
];

export const getItems = () => items;

export const getItem = id => items.find(item => item.id === id);

// find
// 提供されたテスト関数を満たす配列内の最初の要素を返します。テスト関数を満たす値がない場合はundefinedを返します。

// findIndex
// 配列内の指定されたテスト関数に合格する最初の要素の位置を返します。
// テスト関数に合格する要素がない場合を含めそれ以外の場合は-1を返します。