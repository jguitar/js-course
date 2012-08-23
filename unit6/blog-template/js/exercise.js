function addIcon() {
  var content = document.getElementById('content');
  var titles = content.getElementsByTagName('h1');
  for (var i = 0; i < titles.length; i++){
    icon = document.createElement('img');
    icon.src = 'images/blog.png';
    titles[i].insertBefore(icon);
  }
}

function removeBlogArchive(){
  var archive = document.getElementById('archive');
  archive.parentNode.removeChild(archive); // archive.innerHTML = '';
}

function addBlogRoll() {
  var sidebar = document.getElementById('sidebar');
  var widget = createWidget('Blog Roll', ['texto 1', 'algo mejor', 'un buen post']);
  sidebar.appendChild(widget);
}

function createWidget(title, elements){
  var widget_div = document.createElement('div');
  widget_div.className = 'widget';

  var h2 = createH2(title);
  var content = createContent(elements);

  widget_div.appendChild(h2);
  widget_div.appendChild(content);
  return widget_div;
}

function createH2(title){
  var h2 = document.createElement('h2');
  h2.innerHTML = title;
  return h2;
}

function createContent(elements){
  var content_div = document.createElement('div');
  content_div.className = 'contentarea';
  var list = createListElements(elements);
  content_div.appendChild(list);
  return content_div;
}

function createListElements(elements){
  var list = document.createElement('ul');
  for (var i = 0; i < elements.length; i++){
    var item = createItem(elements[i]);
    list.appendChild(item);
  }
  return list;
}

function createItem(element){
  var link = document.createElement('a');
  link.href = '#';
  link.innerHTML = element;
  var item = document.createElement('li');
  item.appendChild(link);
  return item;
}