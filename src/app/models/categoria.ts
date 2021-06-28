export class Categoria {
    idCategoria:number|undefined;
    nameCategoria:string = "";
    createdDate:string = "";    
    constructor(nameCategoria:string){
        this.nameCategoria = nameCategoria;
        this.createdDate = new Date().toISOString()
    };
}
