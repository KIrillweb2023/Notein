document.addEventListener('DOMContentLoaded', () =>{
    const open = document.querySelector('.adding__them');
    const close = document.querySelector('.close');
    const modal = document.querySelector('.modal');

    const titleinput = document.querySelector('.modal__block-form__title-input');
    const descrinput = document.querySelector('.modal__block-form__title-texarea');
    const buttonAdd = document.querySelector('.modal__block-form__btn');
    const tasking = document.querySelector('.tasking');

    const containerChecked = document.querySelector('.block');
    const checkbox = document.querySelector('.checkbox');

    const menu = document.querySelector('.header__menu');
    const buttonclick = document.querySelector('.header-settings');


    function adaptiveMenu(btn, menu){
        btn.addEventListener('click', () =>{
            menu.classList.toggle('active');
        });
    }
    adaptiveMenu(buttonclick, menu)



    function checkboxMod(check){
        containerChecked.addEventListener('click', () =>{
            check.classList.toggle('active');
        });
    }
    checkboxMod(checkbox);

    function forTabColors(btn, block){
        const arr = ['F44', 'FFBF44', '448FFF', 'C344FF', '3DCD3A'];
        let indificator = 0;
        btn.addEventListener('click', () =>{
            if(indificator < arr.length){
                block.style.backgroundColor = `#${arr[indificator]}`;
                indificator = indificator + 1;
                if(indificator === arr.length){
                    return indificator = 0;
                }
            }
        });
    }
 
    function modalFunc(btn, modal, close){
        btn.addEventListener('click', () =>{
            openFunc();
        });
        close.addEventListener('click', () =>{
            closeFunc();
        });

        function openFunc(){
            modal.classList.add('active');
        }
        function closeFunc(){
            modal.classList.remove('active');
        }
    }
    modalFunc(open, modal, close);

    function task(blockColor, title, descr, remove, pinned, parent){
        const element = document.createElement('div');
        element.classList.add('task');
        element.innerHTML = `
            <div class="remove">
                <img src="${remove}" alt="">
            </div>
            <div class="${blockColor}"></div>
            <div class="text">
                <h2 class="task-title">${title}</h2>
                <p class="task-descr">${descr}</p>
                <div class="colors">Изменить цвет</div> 
            </div>
            <img src="${pinned}" alt="pinned" class="pinned">
        `;
        parent.prepend(element);

       
    }
    const base = [];
    let id = 0;
   

    function addTask(titleInput, descrInput, button){
        button.addEventListener('click', (e) =>{
            e.preventDefault();
            if(titleInput.value.trim() != "" && descrInput.value.trim() != ""){
                base.push({ id: id, title: titleInput.value, descr: descrInput.value });
                task(`block-color`, `${titleInput.value}`, `${descrInput.value}`, `./icons/main-icons/cross_ameo39np7q7r.svg`, `./icons/pinned.svg`, tasking);
            }
            const textBlockTab = document.querySelector('.colors');
            const blockIColor = document.querySelector('.block-color');
            if(textBlockTab){
                forTabColors(textBlockTab, blockIColor);
            }
            const remove = document.querySelectorAll('.remove');
            remove.forEach((btn, i) =>{
                btn.addEventListener('click', () =>{
                    btn.parentNode.remove();
                    base.splice(i, 1);
                });
            });
           
            modal.classList.remove('active');
            titleInput.value = "";
            descrInput.value = "";
            id++;
        });
    }
    addTask(titleinput, descrinput, buttonAdd);
});


