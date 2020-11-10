function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
}
function toggle_menu(){
    
    var element8 = document.getElementById("main-menu");
    element8.classList.toggle('slds-grid');
    Array.from(document.getElementsByClassName('change')).forEach(function(el) { 
        el.classList.toggle('slds-large-size_3-of-12');
    });

    Array.from(document.getElementsByClassName('smallhide')).forEach(function(el) { 
        el.classList.toggle('slds-hide_large');
    });
    Array.from(document.getElementsByClassName('slds-hide_small')).forEach(function(el) { 
        el.classList.toggle('slds-show_small');
    });
    Array.from(document.getElementsByClassName('slds-show_small')).forEach(function(el) { 
        el.classList.toggle('slds-hide_small');
       
    });
   
    Array.from(document.getElementsByClassName('check')).forEach(function(esl) { 
         esl.classList.toggle('slds-grid');
         
     });

    Array.from(document.getElementsByClassName('check-2')).forEach(function(el) { 
        el.classList.toggle('slds-align_absolute-center');
        
    });
    
    Array.from(document.getElementsByClassName('left-align')).forEach(function(el) { 
        el.classList.toggle('slds-align_absolute-center');
        
    });
    Array.from(document.getElementsByClassName('card-margin')).forEach(function(el) { 
        el.classList.toggle('slds-m-around_medium');
        
    });
    
}




