destructivelyRemoveLastKitten
var name ='Ralph'
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
 var name = "Felix"
function appendKitten(name) {

  const moreCats = [name, ...kittens]

}

var name = "Arnold"
function prependKitten(name) {

 const moreCats = [...kittens, name]

}

function removeLastKitten(name) {
 return kittens.slice(0, kittens.length - 1);

}

function removeFirstKitten(name) {
return kittens.slice(1);
}
