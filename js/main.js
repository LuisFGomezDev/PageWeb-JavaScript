$(document).ready(function(){
    
    //Slider

    //Comprobamos con un If, si estamos ubicados en la pagina Ppal del INDEX
    if(window.location.href.indexOf('index') > -1)
    {  
        $(function(){
            $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1000,
            responsive: true
            });
        });


    //Guardar los Post en un Archivo de JSON y cargarlos dinamicamente a la página
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().format("D") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().format("D") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().format("D") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().format("D") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia ' + moment().format("D") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        },

    ];

    //console.log(posts);
    

    posts.forEach((item, index) => {
        var post = 
        `
        <article class="post">                    
        <h2>${item.title}</h2>

        <span class="date">${item.date}</span>

        <p>
            ${item.content}
        </p>

        <a href="#" class="button-more">Leer mas</a>
        </article>
        `;

    //console.log(post);
    //Añadimos cada Post desde el array anterior dinamicamente a la Pagina asi:

    $("#posts").append(post);

    });//Final Foreach


    }//Fin If Comprobacion de Pagina INDEX


    //SELECTOR DE TEMAS DE LA PAGINA
    var theme = $("#theme");
    
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");

        href="css/red.css"
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    //Evento Click boton Subir
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });


    //Login Falso - IDENTIFICACION
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        //Se guarda el nombre
        localStorage.setItem("form_name", form_name);
    });

    //Recuperamos desde LocalStorage el valor de form_name
    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined")
    {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><hr><strong> Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<br><a href='#' id='logout'>Cerrar Sesión</a>");
        
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

        //ACORDEON
        //Comprobamos con un If, si estamos ubicados en la pagina Ppal del ABOUT.HTML
        if(window.location.href.indexOf('about') > -1)
        {
            $("#acordeon").accordion();  
        }
    
        //RELOJ
        //Comprobamos con un If, si estamos ubicados en la pagina Ppal del RELOJ.HTML
        if(window.location.href.indexOf('reloj') > -1)
        {
            setInterval(function(){
                var reloj = moment().format("hh:mm:ss");
                $('#reloj').html(reloj);
            }, 1000);
        }

        
        if(window.location.href.indexOf('contact') > -1)
        {
            $("form input[name='date']").datepicker();

            $.validate({
                lang: 'es'
            });

            $.validate({
                lang: 'es',
                errorMessagePosition: 'top',
                scrollToTopOnError: true
            });
        }
        

}); //Fin de la carga Document