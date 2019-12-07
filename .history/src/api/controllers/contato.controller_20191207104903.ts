import { Controller, Get, Post, Put, Delete, Param, Body, HttpStatus } from "@nestjs/common";
import { ContatoService } from "../services/contato.service";
import { Contato } from "../entities/contato.entity";
import { ApiUseTags } from "@nestjs/swagger";

@ApiUseTags('contatos')
@Controller('contatos')
export class ContatoController{

    constructor(private readonly service: ContatoService) {}

    @Get(':id')
    async findById(@Param('id') id){
        try{
            return await this.service.findById(id);
        }catch(err){
            return HttpStatus.BAD_REQUEST
        }   
    }

    @Get('clientes/:idCliente')
    async findByIdCliente(@Param('idCliente') idCliente){
        try{
            return await this.service.findByIdCliente(idCliente);
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

    @Post(':idCliente')
    async create(@Body() body: Contato, @Param('idCliente') idCliente){
        try{
            return await this.service.create(body, idCliente);
        }catch(err){
            return HttpStatus.BAD_REQUEST
        }   
    }

    @Put(':id')
    async update(@Body() body: Contato, @Param('id') id){
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