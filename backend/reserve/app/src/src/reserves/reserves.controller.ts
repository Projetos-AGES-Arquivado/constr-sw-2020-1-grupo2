import {
  Get,
  Controller,
  Post,
  Body,
  Res,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesModel } from './models/reserves.model';

@Controller('reserves')
export class ReservesController {
  constructor(private readonly service: ReservesService) {}

  @Post()
  async create(@Body() body, @Res() res) {
    const model: ReservesModel = body;
    try {
      if (!model) {
        console.log(body);
        return res.status(400).json({ message: 'Reserva inválida!' });
      }

      const reserves = await this.service.create(model);
      return res.status(201).json(reserves);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao criar as reservas', error });
    }
  }

  @Get()
  async findAll(@Res() res): Promise<ReservesModel[]> {
    try {
      const reserves = await this.service.findAll();
      return res.status(200).json(reserves);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar as reservas', error });
    }
  }

  @Get(':id')
  async findByID(@Param() params, @Res() res): Promise<ReservesModel[]> {
    try {
      const reserves = await this.service.findById(params.id);
      return res.status(200).json(reserves);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar as reservas', error });
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Res() res,
    @Body() body,
  ): Promise<ReservesModel> {
    const model: ReservesModel = body;
    try {
      const reservas = await this.service.update(id, model);
      return res.status(200).json({ message: 'Alterado com sucesso!' });
    } catch (error) {
      return res.status(400).json({
        message: 'Ops! Ocorreu um erro ao alterar as reservas',
        error,
      });
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res): Promise<ReservesModel> {
    try {
      const reserves = await this.service.delete(id);
      return res.status(200).json({ message: 'Removido com sucesso!' });
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Ops! Ocorreu um erro ao buscar as reservas', error });
    }
  }
}
