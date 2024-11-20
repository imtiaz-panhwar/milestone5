"use strict";
// Correct element references
let myName = document.getElementById('name');
let desig = document.getElementById('designation');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let add = document.getElementById('add');
let pass1 = document.getElementById('pass1');
let deg1 = document.getElementById('deg1');
let uni1 = document.getElementById('uni1');
let pass2 = document.getElementById('pass2');
let deg2 = document.getElementById('deg2');
let uni2 = document.getElementById('uni2');
let skill1 = document.getElementById('skills1');
let skill2 = document.getElementById('skills2');
let skill3 = document.getElementById('skills3');
let lang1 = document.getElementById('lang1');
let lang2 = document.getElementById('lang2');
let lang3 = document.getElementById('lang3');
let styear = document.getElementById('styear');
let endyear = document.getElementById('endyear');
let company = document.getElementById('company');
let comlocation = document.getElementById('Comlocation');
let jobtitle = document.getElementById('jobtitle');
let achv1 = document.getElementById('achv1');
let achv2 = document.getElementById('achv2');
let achv3 = document.getElementById('achv3');
let form = document.getElementById('form');
let pic = document.getElementById('pic');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('name', myName?.value || '');
    localStorage.setItem('designation', desig?.value || '');
    localStorage.setItem('phone', phone?.value || '');
    localStorage.setItem('email', email?.value || '');
    localStorage.setItem('address', add?.value || '');
    localStorage.setItem('pass1', pass1?.value || '');
    localStorage.setItem('deg1', deg1?.value || '');
    localStorage.setItem('uni1', uni1?.value || '');
    localStorage.setItem('pass2', pass2?.value || '');
    localStorage.setItem('deg2', deg2?.value || '');
    localStorage.setItem('uni2', uni2?.value || '');
    localStorage.setItem('skill1', skill1?.value || '');
    localStorage.setItem('skill2', skill2?.value || '');
    localStorage.setItem('skill3', skill3?.value || '');
    localStorage.setItem('lang1', lang1?.value || '');
    localStorage.setItem('lang2', lang2?.value || '');
    localStorage.setItem('lang3', lang3?.value || '');
    localStorage.setItem('styear', styear?.value || '');
    localStorage.setItem('endyear', endyear?.value || '');
    localStorage.setItem('company', company?.value || '');
    localStorage.setItem('comlocation', comlocation?.value || '');
    localStorage.setItem('jobtitle', jobtitle?.value || '');
    localStorage.setItem('achv1', achv1?.value || '');
    localStorage.setItem('achv2', achv2?.value || '');
    localStorage.setItem('achv3', achv3?.value || '');
    if (pic?.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            let textImg = reader.result;
            localStorage.setItem('profile_pic', textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    // Redirect to the resume page
    window.location.href = "./resume/index.html";
});
