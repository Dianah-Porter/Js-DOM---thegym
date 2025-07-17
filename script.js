
//2. Selecting Elements
function changeAllArticleColors(){
    const articles = document.querySelectorAll('#products article');
    
    for(let article of articles){
        console.log(article);
        article.classList.add('sale');
    }
    return articles;
}
 changeAllArticleColors();
 
 //3. Events

 function attachBuyEvents(){
    let buttons = document.querySelectorAll('#products button');

    for(const button of buttons){
        button.addEventListener('click', function(e){
            console.log("BUY!!")
        console.log(e.currentTarget );
        // console.log(this);
        e.currentTarget.addEventListener('mouseover', function(){
            document.body.style.backgroundColor = 'lightblue';
        })
    })
    }
    
 }
 attachBuyEvents();

//let button = document.querySelectorAll('#products .buy'); if you want to target the button by using it's class

//4. Attributes


