describe("TaskList", function() {
  it('adds a new task', function(){
    aTaskList.add('a task');
    expect(aTaskList.taskList.length).toEqual(1);
  });

  it('removes a valid task', function(){
    // hack to empty all
    aTaskList.remove('a task');

    aTaskList.add('a task1');
    aTaskList.add('a task2');
    aTaskList.add('a task3');
    aTaskList.remove('a task2');
    expect(aTaskList.taskList.length).toEqual(2);
  });

  it('do a valid task', function(){
    // hack to empty all
    aTaskList.remove('a task1');
    aTaskList.remove('a task3');

    aTaskList.add('a task');
    expect(aTaskList.taskList[0].isDone).toBeFalsy;
    aTaskList.doTask('a task');
    expect(aTaskList.taskList[0].isDone).toBeTruety;
  });

  it('returns a done list', function(){
    // hack to empty all
    aTaskList.remove('a task');

    aTaskList.add('a task');
    expect(aTaskList.doneList().length).toEqual(0);
    aTaskList.doTask('a task');
    expect(aTaskList.doneList().length).toEqual(1);
  });

  it('returns a pending list', function(){
    // hack to empty all
    aTaskList.remove('a task');

    aTaskList.add('a task');
    expect(aTaskList.pendingList().length).toEqual(1);
    aTaskList.doTask('a task');
    expect(aTaskList.pendingList().length).toEqual(0);
  });

  it('returns all tasks', function(){
    // hack to empty all
    aTaskList.remove('a task');

    aTaskList.add('a task1');
    aTaskList.add('a task2');
    aTaskList.add('a task3');
    aTaskList.add('a task4');
    expect(aTaskList.all().length).toEqual(4);
  });

});
