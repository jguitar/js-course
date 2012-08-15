describe("TaskList", function() {
  it('adds a new task', function(){
    aTaskList.clear();
  
    aTaskList.add('a task');
    expect(aTaskList.doneList.length).toEqual(0);
    expect(aTaskList.pendingList.length).toEqual(0);
    expect(aTaskList.all().length).toEqual(1);
  });
  
  it('removes a valid task', function(){
    aTaskList.clear();
  
    aTaskList.add('a task1');
    aTaskList.add('a task2');
    aTaskList.add('a task3');
    aTaskList.remove('a task2');
    expect(aTaskList.all().length).toEqual(2);
  });

  it('do a valid task', function(){
    aTaskList.clear();

    aTaskList.add('a task');
    expect(aTaskList.all()[0].isDone()).toBeFalsy;
    expect(aTaskList.doneList().length).toEqual(0);
    expect(aTaskList.pendingList().length).toEqual(1);

    aTaskList.doTask('a task');
    expect(aTaskList.all()[0].isDone()).toBeTruety;
  });

  it('returns a done list', function(){
    aTaskList.clear();

    aTaskList.add('a task');
    expect(aTaskList.doneList().length).toEqual(0);
    aTaskList.doTask('a task');
    expect(aTaskList.doneList().length).toEqual(1);
  });

  it('returns a pending list', function(){
    aTaskList.clear();

    aTaskList.add('a task');
    expect(aTaskList.pendingList().length).toEqual(1);
    aTaskList.doTask('a task');
    expect(aTaskList.pendingList().length).toEqual(0);
  });

  it('returns all tasks', function(){
    aTaskList.clear();

    aTaskList.add('a task1');
    aTaskList.add('a task2');
    aTaskList.add('a task3');
    aTaskList.add('a task4');
    expect(aTaskList.all().length).toEqual(4);
  });

});
