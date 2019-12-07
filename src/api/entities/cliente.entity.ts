import { Contato } from "./contato.entity";
import { OneToMany, Entity, PrimaryGeneratedColumn, Column, JoinColumn } from "typeorm";
import { ApiModelPropertyOptional, ApiModelProperty } from "@nestjs/swagger";

@Entity('clientes')
export class Cliente{

    @ApiModelPropertyOptional()
    @Column()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({name: 'nome_cliente', nullable: false, length: 100})
    nomeCliente: string;
    
    @ApiModelPropertyOptional()
    @OneToMany(type => Contato, contato => contato.cliente)
    contato: Contato[];

}