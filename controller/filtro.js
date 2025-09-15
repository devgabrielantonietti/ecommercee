export function filtrar(filtro, bd){
    let novoBanco = [];
    if(filtro === ''){
        return bd;
    }else{
        for(let i = 0 ; i < bd.length ;i++){
            if(bd[i].genero.includes(filtro)){
                novoBanco.push(bd[i]);
            }
        }
        return novoBanco;
    }
}