var taskList = [];

var add = function(text){
  task = {
    text: text,
    done: false
  }
  taskList.push(task);
}

var remove = function(text){
  for (var i = 0; i < taskList.length; i++){
    if (taskList[i].text == text){
      taskList.splice(i, 1);
      return true;
    }
  }
}

var doTask = function(text){
  for (var i = 0; i < taskList.length; i++){
    if (taskList[i].text == text){
      taskList[i].done = true;
    }
  }
}

var doneList = function(){
  result = [];
  for (var i = 0; i < taskList.length; i++){
    if (taskList[i].done) {
      result.push(taskList[i]);
    }
  }
  return result;
}

var pendingList = function(){
  result = [];
  for (var i = 0; i < taskList.length; i++){
    if (!taskList[i].done) {
      result.push(taskList[i]);
    }
  }
  return result;
}

var all = function(){
  return taskList;
}

var toConsole = function(){
  for (var i = 0; i < taskList.length; i++){
    console.log('Task #', i + 1 + ':', taskList[i].text, '. Done:', taskList[i].done);
  }
}