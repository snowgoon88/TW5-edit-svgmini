// ************************************************************************ Debug
function get_type(thing){
    if(thing===null)return "[object Null]"; // special case
    return Object.prototype.toString.call(thing);
}
//Returns true if it is a DOM node
function isNode(o){
  return (
    typeof Node === "object" ? o instanceof Node : 
    o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
  );
}
//Returns true if it is a DOM element    
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
);
}
// ******************************************************************************
// ********************************************************************** Example
// Suppose that Raphal is accessible
var run_example = function () {

    // create a Paper with parent element = svg_edit
    var paper = Raphael("svg_edit", 320, 200);
    var circle;

    // HTML svg node construit par Raphael
    var canvas = paper.canvas;
    canvas.onclick = function(event) {
	//DEBUG console.log( "__CLICK e=",event )
	// Un nouveau petit rond bleu
	circle = paper.circle(event.layerX, event.layerY, 5);
	// Sets the fill attribute of the circle to blue (#00f)
	circle.attr("fill", "#00f")
	// Sets the stroke attribute of the circle to white
	circle.attr("stroke", "#fff")
    };

    // Creates circle at x = 50, y = 40, with radius 10
    circle = paper.circle(50, 40, 10)
    // Sets the fill attribute of the circle to red (#f00)
    circle.attr("fill", "#f00")
    // Sets the stroke attribute of the circle to white
    circle.attr("stroke", "#fff")
};
// **************************************************************** window.onload
window.onload = function () {
    run_example()
};
// ******************************************************************************
