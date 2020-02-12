
var  newsPlugin = (function(){
    var data = undefined,
    graphData = undefined;
    function init(){
        console.log("plugin module is init ");
        initSlider();
        data = DataManager.sportsData;
        graphData = DataManager.graphData;
        appendBigNews();
        createNewsGraph();
        bindClicks();
    }

    function bindClicks(){
        $('.slider_button').on("click",function(event){
          var  $el= $(event.target);
          var $slider= $('.slider ul');
          var $elBttn = $el.data("btn");
          var margin =  $slider.data("marginleft") ;
            
          if($elBttn == 'left' ){ //&& margin > -600
            margin = margin- 200;
            $slider.css("margin-left", margin);
            $slider.data("marginleft",margin);
          }
          else{
            if(margin != 0 ){ //&& $elBttn == 'right'
              margin = margin + 200;
              $slider.css("margin-left", margin);
              $slider.data("marginleft",margin); 
            }
          }
        });
  
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

    function initSlider(){
        $('.slider').removeClass("hide");
        $('.slider ul').data("marginleft",0);
        $('.slider ul').data("marginright",900);
        
      }

    function appendBigNews(){
        var html = createTheBigNews();
        $('.bigNews ul').append(html);
        //$('.small ul').append(html);
    }

    function createNewsGraph(){
        Highcharts.chart('graph-listing', {
            chart: {
              type: 'column'
            },
            title: {
              text: 'News Portal Statistics. January, 2020'
            },
            subtitle: {
              text: 'Click the columns to view versions. Source: <a href="https://timesofindia.indiatimes.com" target="_blank">Anonymous Data just for training </a>'
            },
            accessibility: {
              announceNewData: {
                enabled: false
              }
            },
            xAxis: {
              type: 'News Portal'
            },
            yAxis: {
              title: {
                text: 'Total news distribution share'
              }
            },
            legend: {
              enabled: false
            },
            plotOptions: {
              series: {
                borderWidth: 0,
                dataLabels: {
                  enabled: true,
                  format: '{point.y:.1f}%'
                }
              }
            },
          
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
          
            series: [{
              name: "NEWS DATA",
              colorByPoint: true,
              data: graphData.mainGraphData,
            }],
            drilldown: {
              series: graphData.drillDownData
            }
          });
    }

    return {
        init : init
    }
})();