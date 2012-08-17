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

  var widget = document.createElement('div');
}
