// Correct element references
let myName: any = document.getElementById('name');
let desig: any = document.getElementById('designation');
let phone: any = document.getElementById('phone');
let email: any = document.getElementById('email');
let add: any = document.getElementById('add');
let pass1: any = document.getElementById('pass1');
let deg1: any = document.getElementById('deg1');
let uni1: any = document.getElementById('uni1');
let pass2: any = document.getElementById('pass2');
let deg2: any = document.getElementById('deg2');
let uni2: any = document.getElementById('uni2');
let skill1: any = document.getElementById('skills1');
let skill2: any = document.getElementById('skills2');
let skill3: any = document.getElementById('skills3');
let lang1: any = document.getElementById('lang1');
let lang2: any = document.getElementById('lang2');
let lang3: any = document.getElementById('lang3');
let styear: any = document.getElementById('styear');
let endyear: any = document.getElementById('endyear');
let company: any = document.getElementById('company');
let comlocation: any = document.getElementById('Comlocation');
let jobtitle: any = document.getElementById('jobtitle');
let achv1: any = document.getElementById('achv1');
let achv2: any = document.getElementById('achv2');
let achv3: any = document.getElementById('achv3');
let form: any = document.getElementById('form');
let pic: any = document.getElementById('pic');

form?.addEventListener('submit', (e: any) => {
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
        
        let textImg = reader.result as string; 
        localStorage.setItem('profile_pic', textImg);
    });

        reader.readAsDataURL(pic.files[0]);
}

    // Redirect to the resume page
    window.location.href = "./resume/index.html";
});
