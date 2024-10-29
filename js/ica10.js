console.log('hello world')
document.getElementById('shoes').addEventListener("mouseenter", function(e){
    alert("YOU JUST WON THE ONITSUKA TIGER GIVEAWAY")
    document.getElementById("paragraph").innerHTML = "CONGRATULATIONS!!!"
    document.getElementById("paragraph").style.fontSize = '50px'
    document.getElementById("paragraph").style.textAlign = 'center'
    document.getElementById("paragraph").style.fontWeight = 'bold'
    document.getElementById("shoes").remove()
    document.getElementById("title").remove()

    document.body.style.backgroundImage = "linear-gradient(to right, red, orange, yellow, green, blue,  purple)"
})
