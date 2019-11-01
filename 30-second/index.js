const countReduce = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

console.log(countReduce([1, 2, 3, 2, 3, 1], 1));

const reduceCount = arr =>
  arr.reduce((pre, cur) => {
    pre[cur] ? (pre[cur] += 1) : (pre[cur] = 1);
    return pre;
  }, {});

console.log(reduceCount([1, 2, 3, 2, 3, 1]));

const deepFlat = arr =>
  [].concat(...arr.map(m => (Array.isArray(m) ? deepFlat(m) : m)));

console.log(deepFlat([1, [2], [[3], 4], 5]));

const diffArr = (a, b) => {
  const s = new Set(a);
  return b.filter(v => !s.has(v));
};

console.log(diffArr([1, 2, 3], [2, 3, 4, 5]));

const parentChild = (items, id = null, link = "parent_id") =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, child: parentChild(items, item.id) }));

const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];

console.log(parentChild(comments));
