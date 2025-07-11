function changeAllArticleColors(){
    let articles = document.querySelectorAll('#products');
    // articles = 3;
    for(let char of articles){
        console.log(char);
        char.classList.add('sale');
    }
    return articles;
}
 changeAllArticleColors();

