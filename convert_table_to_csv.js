  /*se le pasa el parametro del nombre de la tabla y el nombre del archivo con el que se guardara
 *el nombre del archivo en este caso se concatenara con la fecha
 */
function exportTableToCSV(table,filename) {
    //se obtiene la tabla que se quiere exportar a CSV por el ID y se almacena en la variable tabla2
    var tmpTable = document.getElementById(table);
    //se obtienen las filas por la etiqueta (tr) y se almacena en la variable trsTabla2
    var trsTable = tmpTable.getElementsByTagName("tr");
    //se obtienen las celdas por la etiqueta (td) y se almacena en la variable tdsTabla2
    var tdsTable = tmpTable.getElementsByTagName("td");
    //se divide la cantidad de celdas entre la cantidad de ffilas para saber cuantas celdas tiene una fila
    var delimrow = tdsTable.length/trsTable.length;
    //se inicializa la variable data donde se guardara el texto de las celdas
    var data = "";
    //el for recorre las celdas y las junta en data
    for (i=0; i<tdsTable.length; i++){
            //entra en el "if" si la variable i es mayor a 0 e i+1 es multiplo del delimrow
            if (i>0 && (i+1)%delimrow==0)
            {
                //agrega el exto de la ultima celda de la fila y un salto de linea a data
                data = data + "\"" + tdsTable[i].innerHTML + "\"" + "\r\n";    
            }
            else
            {
                //agrega el texto de la celda a data
                data = data + "\"" + tdsTable[i].innerHTML + "\",";
            }
    }
    //se obtiene el formato de fecha deseado
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth()+1;
    var curr_year = d.getFullYear();
    var curr_hour = d.getHours();
    var curr_minutes = d.getMinutes();
    var curr_seconds = d.getSeconds();
    //formato de fecha --> day-month-year_hourminutesseconds
    //se le asigna un valor a filename
    var fn = filename + " " + curr_date + "-" + curr_month + "-" + curr_year + "_" + curr_hour + curr_minutes + curr_seconds;
    //se crea un elemento <a></a>
    var download = document.createElement('a');
    //se le asigna el atributo href dando los parametros tipo de archivo, codificacion de caracteres
    //y en encodeURIComponent va la variable donde se tiene las celdas en cadena de texto
    download.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(data));
    //se le asigna el atributo download y se le da el nombre con la extension
    download.setAttribute('download', fn+'.csv');
    //se da click en el elemento creado (<a></a>)
    download.click();
}
