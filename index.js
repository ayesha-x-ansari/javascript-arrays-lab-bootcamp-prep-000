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

  const moreCats = [name, ...kitten]

}

var name = "Arnold"
function prependKitten(name) {

 const moreCats = [...kitten, name]

}
