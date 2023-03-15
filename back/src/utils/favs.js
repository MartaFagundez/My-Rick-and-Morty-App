const favs = [];

/*
IMPORTANTE:
    In ES6, imports are live read-only views on exported-values. As a result, when you do import a from "somemodule";, you cannot assign to a no matter how you declare a in the module.
    However, since imported variables are live views, they do change according to the "raw" exported variable in exports.
    Fuente: https://stackoverflow.com/questions/32558514/javascript-es6-export-const-vs-export-let/32558929#32558929

    Esto implica que desde los módulos que importen este array, este array sólo se podrá modificar mediante métodos de mutación (ya que son métodos de ESTE array, no de la copia).

    Si se necesitara algún método personalizado para este array, habría que crear aquí dicho método, exportarlo desde aquí, importarlo en el destino e invocarlo en el destino. De esta forma, dicho método estaría mutando este array y dicha mutación se vería reflejada en la copia importada en otro archivo.
*/

module.exports = favs;