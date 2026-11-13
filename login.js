'use strict';
const $=id=>document.getElementById(id);
const msg=$('message');
function show(tab){
  $('login-form').classList.toggle('hidden',tab!=='login');
  $('register-form').classList.toggle('hidden',tab!=='register');
  $('tab-login').classList.toggle('active',tab==='login');
  $('tab-register').classList.toggle('active',tab==='register');
  msg.textContent='';msg.classList.remove('error');
}
$('tab-login').onclick=()=>show('login');
$('tab-register').onclick=()=>show('register');
// HTML form navigation to API domain sets a first-party session cookie.
for(const form of [$('login-form'),$('register-form')]){
  form.action='https://api.swishinator.online'+(form.id==='login-form'?'/api/login':'/api/register');
  form.method='POST';
}
