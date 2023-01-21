const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('#close-btn');

button.addEventListener('click',add);
form.addEventListener('change',save);
closeBtn.addEventListener('click',removeModal);

// add habits
function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5);

    const dayExists = nlwSetup.dayExists(today);

    if(dayExists){
        // alert('Dia já incluso');
        error();
        return;
    }
    nlwSetup.addDay(today);
}
function save(){
    localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};

nlwSetup.setData(data);
nlwSetup.load();


// function alert
function error(){
    modalContainer.classList.add('show');
}
// remove alert
function removeModal(){
    modalContainer.classList.remove('show');
}
// remove touch alert anywhere on screen
window.addEventListener('click', function(e) {

    if (e.target === modalContainer) {
        modalContainer.classList.remove('show');
    }
});

