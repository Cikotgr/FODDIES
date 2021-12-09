let asset5 = document.getElementById('asset5');
let asset4 = document.getElementById('asset4');
let asset3 = document.getElementById('asset3');
let asset1 = document.getElementById('asset1');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    asset5.style.top = value + 'px';
    asset4.style.top = value *0.7 + 'px';
    asset3.style.top = value *0.3 + 'px';
    asset1.style.top = value *0 + 'px';
})
