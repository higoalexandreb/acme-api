import { ApiUseTags } from "@nestjs/swagger";
import { Controller, Get, Post, Put, Delete, HttpStatus, Body, Param } from "@nestjs/common";
import { ClienteService } from "../services/cliente.service";
import { Cliente } from "../entities/cliente.entity";

@ApiUseTags('clientes')
@Controller('clientes')
export class ClienteController{

    constructor(private readonly service: ClienteService) {}

    @Get(':id')
    async findById(@Param('id') id){
        try{
            return await this.service.findById(id);
        }catch(err){
            return HttpStatus.BAD_REQUEST
        }   
    }

    @Get('')
    async findAll(){
        try{
            return await this.service.findAll();
        }catch(err){
            return HttpStatus.BAD_REQUEST
        } 
    }

    @Post('')
    async create(@Body() body: Cliente){
        try{
            return await this.service.create(body);
        }catch(err){
            return HttpStatus.BAD_REQUEST
        }   
    }

    @Put(':id')
    async update(@Body() body: Cliente, @Param('id') id){
        try{
            return await this.service.update(body, id);
        }catch(err){
            return HttpStatus.BAD_REQUEST
        } 
    }

    @Delete(':id')
    async delete(@Param('id') id){
        try{
            this.service.delete(id);
        }catch(err){
            return HttpStatus.BAD_REQUEST
        } 
    }

}