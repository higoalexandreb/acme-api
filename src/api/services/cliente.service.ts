import { Cliente } from "../entities/cliente.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class ClienteService{

    constructor(@InjectRepository(Cliente)
        private readonly repository: Repository<Cliente>
    ){}

    async findById(id): Promise<Cliente>  {
        return await this.repository.findOne({id});
    }

    async findAll(): Promise<Cliente[]>{
        return await this.repository.find();
    }

    async create(cliente: Cliente){
        return await this.repository.save(cliente);
    }

    async update(cliente: Cliente, id){
        
        if (this.repository.findOne(id) != null){
            return await this.repository.save(cliente);
        }

    }

    async delete(id){
        this.repository.delete({id});
    }

}