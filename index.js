function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
}
function mobile_menu(){
    
    var element8 = document.getElementById("main-menu");
    element8.classList.add('slds-grid');
    Array.from(document.getElementsByClassName('change')).forEach(function(el) { 
        el.classList.add('slds-large-size_3-of-12');
    });

    Array.from(document.getElementsByClassName('slds-show_small')).forEach(function(el) { 
        el.classList.add('slds-hide_large');
      
    });
    Array.from(document.getElementsByClassName('slds-hide_small')).forEach(function(el) { 
        el.classList.remove('slds-hide_small');
    });
    Array.from(document.getElementsByClassName('check')).forEach(function(esl) { 
         esl.classList.remove('slds-grid');
         
     });

    Array.from(document.getElementsByClassName('check-2')).forEach(function(el) { 
        el.classList.add('slds-align_absolute-center');
        
    });
    
    Array.from(document.getElementsByClassName('left-align')).forEach(function(el) { 
        el.classList.add('slds-align_absolute-center');
        
    });
    Array.from(document.getElementsByClassName('card-margin')).forEach(function(el) { 
        el.classList.add('slds-m-around_medium');
        
    });
    
}

function list_menu(){
    
    var element8 = document.getElementById("main-menu");
    element8.classList.remove('slds-grid');
    Array.from(document.getElementsByClassName('change')).forEach(function(el) { 
        el.classList.remove('slds-large-size_3-of-12');
    });

    Array.from(document.getElementsByClassName('slds-hide_large')).forEach(function(el) { 
        el.classList.remove('slds-hide_large');
       
    });
    Array.from(document.getElementsByClassName('smallhide')).forEach(function(el) { 
        el.classList.add('slds-hide_small');
    });
    Array.from(document.getElementsByClassName('check')).forEach(function(esl) { 
         esl.classList.add('slds-grid');
         
     });

    Array.from(document.getElementsByClassName('check-2')).forEach(function(el) { 
        el.classList.remove('slds-align_absolute-center');
        
    });
    
    Array.from(document.getElementsByClassName('left-align')).forEach(function(el) { 
        el.classList.remove('slds-align_absolute-center');
        
    });
    Array.from(document.getElementsByClassName('card-margin')).forEach(function(el) { 
        el.classList.remove('slds-m-around_medium');
        
    });
    
}




