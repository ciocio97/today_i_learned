// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

// 01 이름
// 글자 수가 3개 미만이면
// "이름을 정확히 입력해주세요" 메세지가 출력됩니다.
// 글자 수가 3개 이상이면
// "반갑습니다 !" 메세지가 출력됩니다.

let elInputName = document.querySelector('#name');
let successName = document.querySelector('.success-name');
let failureName = document.querySelector('.failure-name');

elInputName.onkeyup = function() {
  if(isMoreThan3Length(elInputName.value)){
    successName.classList.remove('hide');
    failureName.classList.add('hide');
  }else {
    if(elInputName.value.length === 0){
      successName.classList.add('hide');
      failureName.classList.add('hide');
    }else {
      successName.classList.add('hide');
      failureName.classList.remove('hide');
    }
  }
}; 

function isMoreThan3Length(value){
  return value.length >= 3;
}


// 02 아이디(이메일)
// 글자 수가 4개 이상이면
// "사용할 수 있는 아이디 입니다" 메세지가 출력됩니다.
// 글자수가 4개 미만이면
// "사용할 수 없는 아이디 입니다" 메세지가 출력됩니다.

let elInputId = document.querySelector('#username');
let successMessege = document.querySelector('.success-message');
let failureMessege = document.querySelector('.failure-message');

elInputId.onkeyup = function() {
  if(isMoreThan4Length(elInputId.value)) {
    // 아이디 입력칸이 채워졌을 때 (아이디 길이 > 4)
    successMessege.classList.remove('hide');
    failureMessege.classList.add('hide');
  }else{
    // 아이디 입력칸이 비었을 때 (아이디 길이 === 0)
    if(elInputId.value.length === 0){
      successMessege.classList.add('hide');
      failureMessege.classList.add('hide');
    }else{
      // 아이디 입력칸이 채워졌을 때 (아이디 길이 < 4)
      successMessege.classList.add('hide');
      failureMessege.classList.remove('hide');
    }
  }
};

function isMoreThan4Length(value) {
  return value.length >= 4;
}

// 03 비밀번호 확인
// 비밀번호와 비밀번호 확인이 일치하면
// "비밀번호가 일치합니다" 메세지가 출력됩니다.
// 비밀번호와 비밀번호 확인이 일치하지 않으면
// "비밀번호가 일치하지 않습니다" 메세지가 출력됩니다.

let password = document.querySelector('#password');
let passwordRetype = document.querySelector('#password-retype');
let matchMessage = document.querySelector('.match-message');
let mismatchMessage = document.querySelector('.mismatch-message');

passwordRetype.onkeyup = function() {
  if(isMatch(password.value, passwordRetype.value)) {
    // 비밀번호 입력칸이 비었을 때
    if(password.value.length === 0 && passwordRetype.value.length === 0){
      matchMessage.classList.add('hide');
      mismatchMessage.classList.add('hide');
    }else {
      // 비밀번호 입력칸이 채워졌을 때 (비밀번호 일치)
      mismatchMessage.classList.add('hide');
      matchMessage.classList.remove('hide');
    }
  }else {
    // 비밀번호 입력칸이 채워졌을 때 (비밀번호 불일치)
    mismatchMessage.classList.remove('hide');
    matchMessage.classList.add('hide');
  }
};

password.onkeyup = passwordRetype.onkeyup;  // 나이숴~!

function isMatch (password1, password2) {
    return password1 === password2;
}
