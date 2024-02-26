
//what_we_do expandable shapes
function expand_shape1() {
    document.getElementById('shape1').classList.add('parallelogram_expanded')
    document.getElementById('shape2').classList.remove('parallelogram_expanded')
    document.getElementById('shape3').classList.remove('parallelogram_expanded')
    document.getElementById('shape4').classList.remove('parallelogram_expanded')
}

function expand_shape2() {
    document.getElementById('shape1').classList.remove('parallelogram_expanded')
    document.getElementById('shape2').classList.add('parallelogram_expanded')
    document.getElementById('shape3').classList.remove('parallelogram_expanded')
    document.getElementById('shape4').classList.remove('parallelogram_expanded')
}

function expand_shape3() {
    document.getElementById('shape1').classList.remove('parallelogram_expanded')
    document.getElementById('shape2').classList.remove('parallelogram_expanded')
    document.getElementById('shape3').classList.add('parallelogram_expanded')
    document.getElementById('shape4').classList.remove('parallelogram_expanded')
}

function expand_shape4() {
    document.getElementById('shape1').classList.remove('parallelogram_expanded')
    document.getElementById('shape2').classList.remove('parallelogram_expanded')
    document.getElementById('shape3').classList.remove('parallelogram_expanded')
    document.getElementById('shape4').classList.add('parallelogram_expanded')
}

document.getElementById('shape1').addEventListener("mouseover", expand_shape1)
document.getElementById('shape2').addEventListener("mouseover", expand_shape2)
document.getElementById('shape3').addEventListener("mouseover", expand_shape3)
document.getElementById('shape4').addEventListener("mouseover", expand_shape4)