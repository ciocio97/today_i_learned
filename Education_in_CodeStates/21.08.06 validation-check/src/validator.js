
let elInputId = document.querySelector('#username');
let successMessege = document.querySelector('.success-message');
let failureMessege = document.querySelector('.failure-message');

elInputId.onkeyup = function() {
  if(onlyNumberAndEnglish(elInputId.value)) {
    failureMessege.classList.add('hide');
    successMessege.classList.remove('hide');
  }else {
    if(elInputId.value.length === 0){
      failureMessege.classList.add('hide');
      successMessege.classList.add('hide');
    }else {
      failureMessege.classList.remove('hide');
      successMessege.classList.add('hide');
    }
  }
}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]{3,}$/.test(str);  // *왜 쓰는거지
}

// 패스워드 검사
let failurePassword = document.querySelector('.failure-password');

password.onkeyup = function() {
  if(strongPassword(password.value)){
    failurePassword.classList.add('hide');
  }else {
    if(password.value.length === 0){
      failurePassword.classList.add('hide');
    }else {
      failurePassword.classList.remove('hide');  
    }
  }
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

// 휴대폰 번호 검사
let phoneNumber = document.querySelector('#phone-number');
let successNumber = document.querySelector('.success-number');
let failureNumber = document.querySelector('.failure-number');

phoneNumber.onkeyup = function() {
  if(strongPhoneNumber(phoneNumber.value)){
    successNumber.classList.remove('hide');
    failureNumber.classList.add('hide');
  }else {
    if(phoneNumber.value === ''){  // textContent니까 이게 된다
      successNumber.classList.add('hide');
      failureNumber.classList.add('hide');
    }else {
      successNumber.classList.add('hide');
      failureNumber.classList.remove('hide');
    }
  }
}

// [유효성 검증 함수] : 전화 번호
function strongPhoneNumber(num) {
  return /\d{2,3}[- .]?\d{3,4}[- .]?\d{3,4}/.test(num);  // ?!?
}
