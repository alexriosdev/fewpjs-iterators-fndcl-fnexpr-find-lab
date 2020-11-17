const records = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(records) {
  let result = records.find(record => record.result === 'W');
  return result ? result.year : undefined;
}