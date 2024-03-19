var calculator = (function(){
    function add(x,y){
        return x + y;
    };

    function sub(x,y){
        return x - y;
    };

    function mul(x,y){
        return x * y;
    }

    function div(x,y){
        return x / y;
    }
    return {
        add : add,
        sub : sub,
        mul : mul,
        div : div,
    };
})();

var area = (function(){
    function getCircle(x){
        return x * x * Math.PI;
    }

    function getRectangle(x,y){
        return x * y;
    }

    function getTriangle(x,y){
        return (x * y) / 2;
    }

    return {
        getCircle : getCircle,
        getRectangle : getRectangle,
        getTriangle : getTriangle,
    };
})();
//alert("안녕하세요");