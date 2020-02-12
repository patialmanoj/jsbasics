
var  newsPlugin = (function(){
    var data = undefined;
    function init(){
        console.log("plugin module is init ");
        // initSlider();
        data = DataManager.sportsData;
        appendBigNews();
    }

    function createTheBigNews(){
        var html = '';
        var newsCards = data.item;
        for(var i= 0 ; i< 5 ; i++){
            html += '<li class="clearfix">'+ 
                        `<a href="${newsCards[i].link}">
                            <figure>
                                <img src="${newsCards[i].img}" />
                            </figure>
                            <div class="details">
                                <span class="secname">India</span>
                                <h2>${newsCards[i].title}</h2>
                                <p>${newsCards[i].description}</p>
                                <span class="authors"></span>
                                <span class="ag">TNN</span>
                                <span class="strlastupd">${newsCards[i].pubDate}</span>
                            </div>
                         </a>`+
                    '</li>'
        }
        return html;
    }

    function appendBigNews(){
        var html = createTheBigNews();
        $('.bigNews ul').append(html);
        //$('.small ul').append(html);
    }

    return {
        init : init
    }
})();