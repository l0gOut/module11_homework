const listItems = [1, 40, 20, 15, 5, 2, 13, 0, null, undefined, "Строка", NaN];

const finallyList = sortedList(listItems);

console.log(`
      Нечётное кол-во чисел: ${finallyList[0].length}
      Чётное кол-во чисел: ${finallyList[1].length}
      Остальное что не относится чётному и нечётному: ${finallyList[2].join(
        ", "
      )}`);

function sortedList(list) {
  const sortedList = [[], [], []];

  for (let item of list) {
    if (typeof item === "number" && !isNaN(item) && item !== 0)
      item % 2 ? sortedList[0].push(item) : sortedList[1].push(item);
    else sortedList[2].push("" + item);
  }

  return sortedList;
}
