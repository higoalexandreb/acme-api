import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contato } from './entities/contato.entity';
import { ContatoService } from './services/contato.service';
import { ContatoController } from './controllers/contato.controller';
import { ClienteService } from './services/cliente.service';
import { Cliente } from './entities/cliente.entity';
import { ClienteController } from './controllers/cliente.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Cliente, Contato])],
    providers: [ClienteService, ContatoService],
    controllers: [ClienteController, ContatoController]
})
export class ApiModule {}
