import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { Cliente } from "./cliente.entity";

@Entity('contatos')
export class Contato{

    @ApiModelPropertyOptional()
    @Column()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({name: 'nome_contato', length: 100, nullable: false})
    nomeContato: string;

    @ApiModelPropertyOptional()
    @Column({length: 50})
    email: string;

    @ApiModelPropertyOptional()
    @Column({length: 11})
    fone: string;

    @ManyToOne(type => Cliente, cliente => cliente.contato)
    @JoinColumn({name: 'cliente_id'})
    cliente: Cliente;

}