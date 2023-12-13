const { runInNewContext } = require('vm');

// A. Create a function that converts the format of this variable
function formatDataByCode(arrDatas) {
  const output = [];
  const tempMap = new Map();

  arrDatas.forEach((data) => {
    if (!tempMap.has(data.code)) {
      tempMap.set(data.code, {
        name: data.name,
        tel: data.tel,
        code: data.code,
      });
      output.push(tempMap.get(data.code));
    } else {
      const existData = tempMap.get(data.code);
      if (Array.isArray(existData.tel)) {
        existData.tel.push(data.tel);
      } else {
        existData.tel = [existData.tel, data.tel];
      }
    }
  });

  return output;
}

const inputA = [
  { name: 'Alex', tel: '0991112222', code: 'xsf0001' },
  { name: 'Jane', tel: '0812221234', code: 'xsf0002' },
  { name: 'Alex', tel: '0832214433', code: 'xsf0001' },
  { name: 'Alex', tel: '0991113122', code: 'xsf0003' },
];

console.log(formatDataByCode(inputA));

// B. Create a function that converts the format of this variable

function formatDataByContactName(data) {
  const output = data.contact.map((contact) => ({
    name: contact.name,
    customer: data.customer,
    address: data.address,
  }));
  return output;
}

const inputB = {
  customer: 'Xsurface',
  contact: [{ name: 'Max' }, { name: 'Mike' }, { name: 'Adam' }],
  address: 'Sukhumvit 62',
};

console.log(formatDataByContactName(inputB));

// C. Create a function that converts the format of this variable
// from your data i assume you want output that are who have age that can กivisible by 3 and not over that 30

function formatAndSortData(arrDatas) {
  const filterData = arrDatas.filter(
    (data) => data.age % 3 == 0 && data.age < 30
  );
  const sortData = filterData.sort((a, b) => a.age - b.age);
  const output = sortData.map((data) => data.name);
  return output;
}
const inputC = [
  { name: 'A', age: '30' },
  { name: 'B', age: '9' },
  { name: 'C', age: '20' },
  { name: 'D', age: '18' },
  { name: 'E', age: '11' },
  { name: 'F', age: '60' },
  { name: 'G', age: '27' },
  { name: 'H', age: '90' },
  { name: 'I', age: '21' },
  { name: 'J', age: '12' },
];
console.log(formatAndSortData(inputC));
