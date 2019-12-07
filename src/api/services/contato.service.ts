import { InjectRepository } from "@nestjs/typeorm";
import { Contato } from "../entities/contato.entity";
import { Repository } from "typeorm";
import { Cliente } from "../entities/cliente.entity";

export class ContatoService{

    constructor(
        @InjectRepository(Contato) private readonly repository: Repository<Contato>,
    ){}
    
    async findById(id): Promise<Contato>  {
        return await this.repository.findOne({id});
    }

    async findByIdCliente(idCliente){
        return await this.repository.find({
            where:[
                {cliente: idCliente}
            ]
        });
    }

    async findAll(): Promise<Contato[]>{
        return await this.repository.find();
    }

    async create(contato: Contato, idCliente){
        contato.cliente = idCliente;
        return await this.repository.save(contato);
    }

    async update(contato: Contato, id){
        
        if (this.repository.findOne(id) != null){
            return await this.repository.save(contato);
        }

    }

    async delete(id){
        this.repository.delete({id});
    }

}