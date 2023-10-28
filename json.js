const json = {
    "Version": "4.0",
    "Moneda": "MXN",
    "Folio": "",
    "FormadePago": "03",
    "Subtotal": 40,
    "Consumo": {
      "partidas": [
        {
          "descripcion": "DONATIVO PARA DESASTRES",
          "ClaveProdServ": "84101600",
          "unidad": "Valor monetario",
          "ClaveUnidad": "M4",
          "cantidad": "1",
          "importe": 40,
          "valorUnitario": 40,
          "ObjetoImp":"01"
        }
      ]
    },
    "CondicionesDePago": "00",
    "Complemento": {
      "complemento": "donat11",
      "leyenda": "Este comprobante ampara un donativo, el cual será destinado por la donataria a los fines propios de su objeto social. En el caso de que los bienes donados hayan sido deducidos previamente para los efectos del impuesto sobre la renta, este donativo no es deducible. La reproducción no autorizada de este comprobante constituye un delito en los términos de las disposiciones fiscales.",
      "noAutorizacion": "325-SAT-09-I-DIC-4218",
      "version": "1.1",
      "fechaAutorizacion": "2022-03-10"
    },
    "TipoComprobante": "I",
    "TipoCambio": "1",
    "Addenda": "Cruz Roja Mexicana",
    "LugarExpedicion": "11510",
    "Fecha": "2023-10-27 19:45:24",
    "Receptor": {
      "UsoCFDI": "D04",
      "direccion": "Castillo de Chapultepec 27, Ciudad Chapultepec, 02750, Morelos, México",
      "nombre": "MIGUEL YISHAY RODRIGUEZ ENRIQUEZ",
      "rfc": "ROEM000930H24",           
      "DomicilioFiscalReceptor": "02750",
      "RegimenFiscalReceptor":"605",
      "email": "avenegas@cruzrojamexicana.org.mx"
    },
    "Total": 40,
    "Emisor": { "rfc": "CRM6702109K6" },
    "MetodoDePago": "PUE",
    "Serie": "Z",
    "Exportacion": "01"
  }

  var buff = Buffer.from(JSON.stringify(json)).toString("base64")

  console.log(buff);