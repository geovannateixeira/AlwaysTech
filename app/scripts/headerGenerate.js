let header = document.getElementsByTagName("header")[0];

header.innerHTML = 

'<!-- Mobile Contents -->' +
'<div id="mobile-header_content">' +
    '<div id="mb-menu_content">' +
        '<input type="checkbox" id="btn_menu">' +
        '<label id="menu_icon" for="btn_menu">&#9776;</label>' +
        '<nav class="menu">' +
            '<ul class="lists">' +
                '<li><a href="../html/computador.html"> Computadores </a></li>' +
                '<li><a href="../html/notebook.html"> Notebooks </a></li>' +
                '<li><a href="../html/componentes.html"> Componentes </a></li>' +
            '</ul>' +
            '<ul class="lists">' +
                '<li><a href="../html/carrinho.html"> Carrinho</a></li>' +
                '<li><a href="../html/contato.html"> Contato</a></li>' +
                '<li><a href="../html/login.html"> Login/Cadastro </a></li>' +
            '</ul>' +
        '</nav>' +
    '</div>' +
    '<div id="mb-title_content" class="nav_box">' +
        '<a href="../index.html">' + 
            '<h1>Always Tech</h1>' + 
        '</a>' + 
    '</div>' + 
'</div>' + 
'<!-- Desktop Contents -->' +
'<div id="desktop-header_content">' +
    '<div id="sub-menu_content" class="nav_box">' +
        '<div id="sub-menu">' +
            '<a href="../html/produtos.html"> Produtos </a>' +
            '<div id="sub-menu_options">' +
                '<a href="../html/computador.html"> Computadores </a>' +
                '<a href="../html/notebook.html"> Notebooks </a>' +
                '<a href="../html/componentes.html"> Componentes </a>' +
            '</div>' +
        '</div>' +
    '</div>' +
    
    '<div id="title_content" class="nav_box">' +
        '<a href="../index.html">' + 
            '<h1>Always Tech</h1>' + 
        '</a>' + 
    '</div>' +
    
    '<div id="img_content" class="nav_box">' +
        '<div id="img_box">' +
            '<div title="Carrinho" class="img_box">' +
                '<a href="../html/carrinho.html"> <img src="../icons/car_icon.png" /></a>' +
            '</div>' +
            '<div title="Contato" class="img_box">' +
                '<a href="../html/contato.html"><img src="../icons/contato.png"></a>' +
            '</div>' +
            '<div title="Perfil" class="img_box">' +
                '<a href="../html/login.html"> <img src="../icons/perfil.png"/></a>' +
            '</div>' +
        '</div>' +
    '</div>' + 
'</div>';
