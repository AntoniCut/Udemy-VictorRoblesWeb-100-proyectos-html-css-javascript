//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-19-js/assets/js/19-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 18  ----------  

    -  Utiliza los estilos de las tarjetas de proyectos anteriores y añade este formulario. Ver PDF.
    -  El usuario podrá crear artículos.
    -  Los artículos al refrescar la página no deberán borrarse (usa el LocalStorage).

*/


window.addEventListener("DOMContentLoaded", () => {


    //  -----  Referencias al HTML  -----
    const articlesCard = document.querySelector(".layout__articles");
    const title = document.querySelector("#title");
    const subtitle = document.querySelector("#subtitle");
    const description = document.querySelector("#description");
    const form = document.querySelector(".form__create");


    //  -----  array donde insertamos los artículos  -----
    let articles = [];

    //  -----  función para crear artículos  -----
    function createArticle() {

        //  -----  al enviar el formulário  -----
        form.addEventListener('submit', (event) => {

            event.preventDefault();

            if(title.value && subtitle.value && description.value) {

                const article = {
                    title: title.value,
                    subtitle: subtitle.value,
                    description: description.value
                };

                articles.push(article);
                localStorage.setItem('articles', JSON.stringify(articles));
                articles.reverse();

                showArticles();
            }

            else {
                alert("Faltan datos por rellenar en el formulário");
            }

            console.log(articles);

        });

    }


    //  -----  plantilla del formato del artículo para mostrar en el DOM  -----
    function layoutArticles(article) {

        const layout = `
        
            <!-- -----  Plantilla del artículo  ----- -->
            <article class="layout__card">

                <header class="card__header">
                    <p class="card__author"> ${article.subtitle} </p>
                </header>

                <div class="card__content">
                    <h2 class="content__title"> ${article.title} </h2>
                    <p class="content__description">
                        ${article.description}
                    </p>
                </div>

                <button class="content__btn"> Leer más </button>

            </article>

        `;

        return layout;

    }


    //  -----    -----
    function showArticles() {

        articlesCard.innerHTML = '';

        articles = JSON.parse(localStorage.getItem('articles'));
        articles.reverse();

        if(articles.length > 0) {
                   

            articles.forEach( article => {
                
                articlesCard.innerHTML += layoutArticles(article);
            });
        }


    }


    createArticle();
    showArticles();

});
