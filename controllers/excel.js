var XLSX = require("xlsx");
import { read, writeFileXLSX } from "xlsx";

const ExcelAJSON = () => {
  const excel = XLSX.readFile(
    "C:\\Users\\ewebik\\Desktop\\excel-a-json\\datos.xlsx"
  );
  var nombreHoja = excel.SheetNames; // regresa un array
  let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

  const jDatos = [];
  for (let i = 0; i < datos.length; i++) {
    const dato = datos[i];
    jDatos.push({
      ...dato,
      Fecha: new Date((dato.Fecha - (25567 + 2)) * 86400 * 1000)
    });
  }
  console.log(jDatos);
};
ExcelAJSON();

