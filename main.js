var modal = {
    show: function(selector){
        var modal = document.getElementById(selector);
        modal.style.display = 'block';

        setTimeout(function(){
            modal.classList.add('show');
        }, 100);
    },
    hide: function(selector){
        var modal = document.getElementById(selector);
        setTimeout(function(){
            modal.classList.remove('show');
        }, 100);
    }
};

document.addEventListener('click', function(e){
    if(e.target.hasAttribute('data-toggle')){
        var toggle = e.target.getAttribute('data-toggle');

        if(toggle == 'modal'){
            var modalID = e.target.getAttribute('data-target');
            modal.show(modalID);
        }
    }
});

[].forEach.call(document.querySelectorAll('.modal'), function(el){
    el.addEventListener('click', function(e){
        if(e.target.classList.contains('dialog__close-button') || e.target.classList.contains('modal__dimmer')){
            modal.hide(this.id);
        }
    });

    el.addEventListener('transitionend', function(){
        if(!this.classList.contains('show')){
            this.style.display = 'none';
        }
    });
});