Blockly.Blocks["uno_ds18b20_read"] = {
  init: function () {
    this.jsonInit({
      message0: "cảm biến DS18B20 %2 đọc %1 ",
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          "options": [
            [
              "℃",
              "Celcius"
            ],
            [
              "°F",
              "Fahrenheit"
            ]
          ]
        },
        {
          type: "field_dropdown",
          name: "PIN",
          options: digitalPins,
        },
      ],
      output: null,
      colour: "#d400d4",
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["uno_ds18b20_read"] = function (block) {
  var type = block.getFieldValue('TYPE');
  var pin = block.getFieldValue('PIN');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ds18x20'] = 'from ds18b20 import *';
  Blockly.Python.definitions_['init_ds18b20_' + pin] = 'ds_' + pin + ' = DS18B20(' + pin + '_PIN)' ;
  var code = '';
  if (type == "Celcius") 
    code = 'round(ds_' + pin + '.read(), 1)';
  else
    code = 'round((ds_' + pin + '.read() * 1.8) + 32, 1)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
