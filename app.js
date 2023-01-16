const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls'); //parent container for buttons
const sectBtn = document.querySelectorAll('.control'); //actual button
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    //as long as i is less than the length of the section button
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }
    //sections active class
    allSections.addEventListener('click',(e) =>{
        const id = e.target.dataset.id; 
        //dataset is referring to whatever element is clicked on/target
        //taking dataset and putting it into a variable
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            //whatever id is coming from the data set is inside the element variable
            //saving the id this way
            //data id is linked to id
            element.classList.add('active');
        }
    })

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();
