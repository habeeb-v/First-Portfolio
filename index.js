let checkBox  = document.getElementById('toggle');
let body = document.body;
let dark = document.getElementById('dark');
let light = document.getElementById('light');

checkBox.addEventListener('click', function(){
    if(checkBox.checked){
        body.classList.add('dark');
        dark.style.display = 'none';
        light.style.display = 'inline-block';
    } else{
        body.classList.remove('dark');
        dark.style.display = 'inline-block';
        light.style.display = 'none';
    };
});
