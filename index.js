let id = 0;

console.log('hello Josh');

document.getElementById('add').addEventListener('click', () => {
  let createdDate = new Date();
  let table = document.getElementById('list');
  let row = table.insertRow(1);
  let setAttribute = ('id', `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById('first-name').value;
  row.insertCell(1).innerHTML = document.getElementById('last-name').value;
  //row.insertCell(2).innerHTML =`${createdDate.getFullYear()} -${createdDate.getMonth()+ 1 }-${createdDate.getDate()}`;
  row.insertCell(2).innerHTML = document.getElementById('DOB').value;
  row.insertCell(3).innerHTML = document.getElementById('new-date').value;

  row.insertCell(4).innerHTML = document.getElementById('new-time').value;
});
