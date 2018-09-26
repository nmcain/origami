function doDL(s){
    function dataUrl(data) {return "data:x-application/text," + escape(data);}
    window.open(dataUrl(s),"Save","settings.html","width=100, height=100");
    
}