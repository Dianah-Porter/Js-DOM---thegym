/*
//2. Selecting Elements
function changeAllArticleColors(){
    const articles = document.querySelectorAll('#products article');
    
    for(let article of articles){
        console.log(article);
        article.classList.add('sale');
    }
    return articles;
}
 changeAllArticleColors(); */
 
 //3. Events  //4. Attributes

 function attachBuyEvents(){
    let buttons = document.querySelectorAll('#products button');

    for(const button of buttons){
        button.addEventListener('click', function(e){
           /* console.log("BUY!!")
        console.log(e.currentTarget );
        // console.log(this);
        e.currentTarget.addEventListener('mouseover', function(){
            document.body.style.backgroundColor = 'lightblue';
        }) */
       console.log(e.target.parentElement);
       e.target.parentElement.classList.toggle('sale');
       console.log(this.parentElement.getAttribute('data-id'));
    //    const element = document.querySelector('.sale');
    //    console.log(element.textContent);

       const productArticle = e.target.closest('article');
       const productName = productArticle.querySelector('h2').textContent;
       const productPrice = parseInt(productArticle.querySelector('p').textContent);
       const quantity = parseInt(productArticle.querySelector('input').value);
       const total = productPrice * quantity;
      
       const tfoot = document.querySelector('tfoot');
       const table = document.querySelector('table');
       const tbody = document.createElement('tbody');
       const tr = document.createElement('tr');
       
      
    })
    }
    
 }
 attachBuyEvents();

//let button = document.querySelectorAll('#products .buy'); if you want to target the button by using it's class

//5. Creating Elements



