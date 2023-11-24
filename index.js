const form = document.getElementById('triangle-form');
const resultElement = document.getElementById('result');


function CalculateTriangle() {
    const B = parseFloat(form.elements['b'].value);
    // console.log(B);
    const H = parseFloat(form.elements['h'].value);
    
    const area = (1/2) * B * H;
    document.getElementById('result').innerHTML = "THE AREA OF THE TRIANGLE IS: " + area.toFixed(2);

}

function calc() {
    var side = document.getElementById('side').value;
    var areaofpentagon = (1/4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * side**2;
    document.getElementById('results').innerHTML = "THE AREA OF THE PENTAGON IS " + areaofpentagon.toFixed(2);
}

function pyramid() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const sqrt1 = Math.sqrt((width / 2)**2 + height**2);
    const sqrt2 = Math.sqrt((length / 2)**2 + height**2);
    const areaofpyramid = (length * width) + length * sqrt1 + width * sqrt2;
    document.getElementById('resultsofpyramid').innerHTML = "THE AREA OF A PYRAMID IS " + areaofpyramid.toFixed(2);
}











// function CalculateTriangle(){
//     var base = document.getElementById('base').value;
//     var bases = document.getElementById('bases').value;
//     var area = (1/2) * base * bases;
//     document.getElementById('result').innerHTML = "THE AREA OF THE TRIANGLE IS: " + area.toFixed(2);
// }