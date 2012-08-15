var TaskList = function(){

  this.taskList = [];

  this.add = function(text){
    var task = new Task(text);
    this.taskList.push(task);
  }

  this.remove = function(text){
    selected = -1;
    this.iterator(function(task, index){
      if (task.hasText(text)){
        selected = index;
      }
    });
    this.taskList.splice(selected, 1);
  }

  this.doTask = function(text){
    this.iterator(function(task){
      if (task.hasText(text)){
        task.do();
      }
    });
  }

  this.doneList = function(){
    doneTasks = [];
    this.iterator(function(task){
      if (task.isDone()) {
        doneTasks.push(task);
      }
    })
    return doneTasks;
  }

  this.pendingList = function(){
    pendingTasks = [];
    this.iterator(function(task){
      if (!task.isDone()) {
        pendingTasks.push(task);
      }
    });
    return pendingTasks;
  }

  this.all = function(){
    return this.taskList;
  }

  this.toConsole = function(){
    this.iterator(function(task){
      console.log(task.toString());
    });
  }

  this.iterator = function(operation){
    for (var i = 0; i < this.taskList.length; i++){
      operation(this.taskList[i], i);
    }
  }
};

var aTaskList = new TaskList();
