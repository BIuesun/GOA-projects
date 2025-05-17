const htmlTag = document.getElementById("html")
const cssTag = document.getElementById("css")
const jsTag = document.getElementById("js")
const reactTag = document.getElementById("react")
const imgTag = document.getElementById("imgTag")

htmlTag.addEventListener("click", function(){
    imgTag.src = "html.png"
})
cssTag.addEventListener("click", function(){
    imgTag.src = "css.png"
})
jsTag.addEventListener("click", function(){
    imgTag.src = "js.png"
})
reactTag.addEventListener("click", function(){
    imgTag.src = "react.png"
})