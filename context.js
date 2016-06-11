/*Robot function accesses -this- context to set this.name to argument */

var Robot = function (name) {
  this.name = name;

}

/* add function acceses -this- context to set this.name to this.name or "Humans"
    return variable + string + (arguments) */

function add ( op1, op2 ) {
  this.name = this.name || "Humans";
  return this.name + " can count to " + (op1 + op2);
}

/*-------------------------------------------
------------------VAR SET--------------------
-------------------------------------------*/
var voltron = new Robot("Voltron");
var bender = new Robot("Bender Rodriguez");
var optimus = new Robot("Optimus Prime");
var megaman = new Robot("Mega Man");
var bmo = new Robot("B-Mo");
var wall_e = new Robot("Wall-E");


// #1
console.log(add(0, 1));

// #2
console.log(add.call(voltron, 2, 3));
//console.log(add(2, 3).call(voltron));

// #3
console.log(add.apply(optimus, [20, 30]));

// #4

var calculate = add.bind(bender);
console.log(calculate("drinking ", "beer"));