import crypto from "crypto";

export function encriptarPassword(password){
    const salt = crypto.randomBytes(32).toString("hex");
    const hash = crypto.scryptSync(password,salt,10,64,"sha512").toString("hex");
    return{
        salt,
        hash
    }
}

export function validarPassword(password,salt,hash){
    const hashEvaluar = crypto.scryptSync(password,salt,10,64,"sha512").toString("hex");
    return hashEvaluar == hash;
}

export function usuarioAutorizado(req,res,next){
    console.log(req.cookies);
    next();
}

export function adminAutorizado(){

}

/*const {salt,hash} = encriptarPassword("abc");
console.log("salt ------> "+salt);
console.log("hash ------> "+hash);

const aprobado = validarPassword("abc",salt,hash);
console.log("Resultado: "+aprobado);*/