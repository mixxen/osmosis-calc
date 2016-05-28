
var osmotic_pressure = function(kdissol, mole_conc, tempK) {

  var gas_const = 0.08205746

  var atm2bar  = 1.01325
  var atm2psi  = 14.69596432068
  var atm2kPa  = 101.325
  var atm2mmHg = 760.0

  var opress_atm = gas_const * kdissol * mole_conc * tempK;

  return {
    opress_atm: opress_atm,
    opress_bar: opress_atm * atm2bar,
    opress_psi: opress_atm * atm2psi,
    opress_kPa: opress_atm * atm2kPa,
    opress_mmHg: opress_atm * atm2mmHg
  }
}

var convert_C2K = function(tempC) {
   return tempK = tempC + 273.5;
}

/*
 * this function gets called when you click on the calculate button.
 */
var calculate = function() {

  try {
    var kdissol   = Number(document.getElementById('kdissol').value);
    var mole_conc = Number(document.getElementById('mole_conc').value);
    var tempC     = Number(document.getElementById('tempC').value);
    var tempK     = convert_C2K(tempC);

    var results = osmotic_pressure(kdissol, mole_conc, tempK);
    results.tempK = tempK;

    document.getElementById('results').textContent = JSON.stringify(results, false, 2)

  } catch(e) {

    document.getElementById('results').textContent = JSON.stringify(e, false, 2)

  }
}

$(document).ready(function(){
  calculate(); //call calculate when document is ready
})
