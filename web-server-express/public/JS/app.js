console.log('javascript file is loaded ')

fetch('http://puzzle.mead.io/puzzle').then(resp => resp.json())
.then(data => console.log(data))

fetch("http://localhost:3000/weather?address=!")
.then(resp => resp.json())
.then(data => {
  if(data.error){
   console.log("error:", data.error)
  }
  console.log(data)
})