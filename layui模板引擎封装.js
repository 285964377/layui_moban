layui.define(['laytpl','table'],function(exports){
    var laytpl = layui.laytpl;
    var data = {
        mylaytpl :function(res,elDom,viewDom){ //res:AJAX回调,elDomscript模版引擎ID,viewDom为视图DOMID
            var res = res;
            var getTpl = elDom.innerHTML
                ,view = document.getElementById(viewDom);
            laytpl(getTpl).render(res, function(html){
                view.innerHTML = html;
            });
        }
    }
    exports('temple', data);
});