const header = document.querySelector('header');
const greetingPage = document.querySelector('.greeting-page');

const option = {
            rootMargin: "-150px 0px 0px 0px"
}
const Observer = new IntersectionObserver(function(
            entrise, 
            Observer
            ){
                        entrise.forEach(entry =>{
                                    if(!entry.isIntersecting){
                                                header.classList.add('nav-scrolled');
                                    }else{
                                                header.classList.remove('nav-scrolled');
                                    }
                        });
            }
            
            ,option);
Observer.observe(greetingPage);     