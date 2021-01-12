const task3Element = document.getElementById('task-3');

function alertFunc(){
  return alert('This is an alert!');
}

function greet(name){
  return alert(`Hey ${name}!`);
}

function brandNew(str1, str2, str3){
  return str1 + str2 + str3;
}

alertFunc();
greet('Tiago');

task3Element.addEventListener('click', alertFunc);

const strNew = brandNew('This ', 'is ', ' brandNew!');
alert(strNew);