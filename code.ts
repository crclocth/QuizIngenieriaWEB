function show(name: string) {
  if (name == '0') {
    document!.getElementById("text")!.innerHTML = 'No se a encontrado un nombre';
  }
  else {
    document!.getElementById("text")!.innerHTML = 'Nombre: ' + name;
  }
  
}

function mensaje(ms: string){
  if(ms == '0'){
  document!.getElementById("text")!.innerHTML = 'No se a encontrado un nombre';
  }
}
