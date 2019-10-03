let isPaused = false;

document.addEventListener("DOMContentLoaded", function(event){
  window.setInterval(incrementTimer, 1000);
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const heart = document.getElementById('heart');
  const pause = document.getElementById('pause');
  const form = document.getElementById('comment-form');
  plus.addEventListener('click', incrementTimer);
  minus.addEventListener('click', decrementTimer);
  heart.addEventListener('click', likeNumber);
  pause.addEventListener('click', pauseCounter);
  form.addEventListener('submit', addComment);
});

function incrementTimer() {
  if (!isPaused) {
    const counter = document.getElementById('counter');
    let counterNum = parseInt(counter.innerHTML);
    counterNum = (counterNum + 1).toString();
    counter.innerHTML = counterNum;
  }
}

function decrementTimer() {
  const counter = document.getElementById('counter');
  let counterNum = parseInt(counter.innerHTML);
  counterNum = (counterNum - 1).toString();
  counter.innerHTML = counterNum;
}

function likeNumber() {
  const counterNum = document.getElementById('counter').innerHTML;
  let ul = document.getElementsByClassName('likes')[0];
  const li = document.querySelector('li[data-num="' + counterNum + '"]');
  if (li) {
    let count = parseInt(li.dataset.count) + 1;
    li.setAttribute("data-count", (count).toString())
    li.innerHTML = counterNum + " has been liked " + count + " times!"
  } else {
    const node = document.createElement('li');
    node.setAttribute("data-num", counterNum);
    node.setAttribute("data-count", "1");
    node.innerHTML = counterNum + " has been liked 1 time!"
    ul.appendChild(node);
  }
}

function pauseCounter() {
  const pause = document.getElementById('pause');
  if (isPaused) {
    isPaused = false;
    pause.innerHTML = 'pause';
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
  } else {
    isPaused = true;
    pause.innerHTML = 'resume';
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
  }
}

function resumeCounter() {
  const resume = document.getElementById('pause');
  isPaused = false;
  resume.innerHTML = 'pause';
  resume.setAttribute("id", "pause");
  document.getElementById("minus").disabled = false;
  document.getElementById("plus").disabled = false;
  document.getElementById("heart").disabled = false;
  document.getElementById("submit").disabled = false;
}

function addComment(event) {
  event.preventDefault();
  const div = document.getElementById('list');
  let ul = document.getElementById('comments-list');
  let textInput = document.getElementById('comment-input')
  if (!ul) {
    ul = document.createElement('ul');
    ul.setAttribute('id', 'comments-list');
    div.appendChild(ul);
  }
  const li = document.createElement('li');
  li.innerHTML = textInput.value;
  ul.appendChild(li);
  textInput.value = '';
}
