import {
  Get,
  Controller,
  Post,
  Body,
  Res,
  Param,
  Put,
  Delete,
  Query,
} from "@nestjs/common";
import { ReservesService } from "./reserves.service";
import { ReservesModel } from "./models/reserves.model";
import { ApiBody, ApiParam, ApiQuery } from "@nestjs/swagger";
import { Reserves } from "./dto/reserves";

@Controller("reserves")
export class ReservesController {
  constructor(private readonly service: ReservesService) {}

  @ApiBody({ description: "Criação da reserva", type: Reserves })
  @Post()
  async create(@Body() body, @Res() res) {
    const model: ReservesModel = body;
    try {
      if (!model) {
        return res.status(400).json({ message: "Reserva inválida!" });
      }

      const reserves = await this.service.create(model);
      return res.status(201).json(reserves);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Ops! Ocorreu um erro ao criar as reservas", error });
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
        .json({ message: "Ops! Ocorreu um erro ao buscar as reservas", error });
    }
  }

  /**
   * @param id \string user id
   * @query timeOpen \Date? data de abertura da reserva
   * @query timeClose \Date? data de fechamento da reserva
   */

  @ApiParam({ name: "id", type: "" })
  @ApiQuery({
    name: "timeOpen",
    type: "",
    required: false,
    description: "yyyy-mm-dd",
  })
  @ApiQuery({
    name: "timeClose",
    type: "",
    required: false,
    description: "yyyy-mm-dd",
  })
  @Get("user/:id")
  async findByUserID(
    @Param() params,
    @Query() query,
    @Res() res
  ): Promise<ReservesModel[]> {
    const isValidDate = function isValidDate(d: Date) {
      return d instanceof Date && !isNaN(+d);
    };
    try {
      let timeOpen = "timeOpen" in query ? new Date(query.timeOpen) : null;
      let timeClose = "timeClose" in query ? new Date(query.timeClose) : null;

      if ("timeOpen" in query && !isValidDate(timeOpen))
        throw "Data de início inválida";

      if ("timeClose" in query && !isValidDate(timeClose))
        throw "Data de término inválida";

      if (isValidDate(timeOpen) && isValidDate(timeClose)) {
        const reserves = await this.service.findByUserBetweenDates(
          params.id,
          query.timeOpen,
          query.timeClose
        );
        return res.status(200).json(reserves);
      }

      const reserves = await this.service.findByUserId(
        params.id,
        query.timeOpen
      );
      return res.status(200).json(reserves);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Ops! Ocorreu um erro ao buscar as reservas", error });
    }
  }

  /**
   * @query type \string (timeOpen or timeClose)
   * @query min \Date data de limite inferior da busca
   * @query max \Date data de limite superior da busca
   */

  @ApiQuery({
    name: "type",
    type: "",
    required: true,
    description: "timeOpen or timeClose",
  })
  @ApiQuery({
    name: "min",
    type: "",
    required: true,
    description: "yyyy-mm-dd",
  })
  @ApiQuery({
    name: "max",
    type: "",
    required: true,
    description: "yyyy-mm-dd",
  })
  @Get("/period")
  async findByPeriod(@Query() query, @Res() res): Promise<ReservesModel[]> {
    const isValidDate = function isValidDate(d: Date) {
      return d instanceof Date && !isNaN(+d);
    };
    try {
      let type = "type" in query ? query.type : null;
      let min = "min" in query ? new Date(query.min) : null;
      let max = "max" in query ? new Date(query.max) : null;

      if (!type || (type != "timeOpen" && type != "timeClose"))
        throw "Type é obrigatório e deve ser ou timeOpen ou timeClose";

      if (!min || !isValidDate(min)) throw "Data mínima inválida";

      if (!max || !isValidDate(max)) throw "Data máxima inválida";

      const reserves = await this.service.findByPeriod(
        type,
        query.min,
        query.max
      );
      return res.status(200).json(reserves);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Ops! Ocorreu um erro ao buscar as reservas", error });
    }
  }

  @ApiParam({ name: "id", type: "" })
  @Get(":id")
  async findByID(@Param() params, @Res() res): Promise<ReservesModel[]> {
    try {
      const reserves = await this.service.findById(params.id);
      return res.status(200).json(reserves);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Ops! Ocorreu um erro ao buscar as reservas", error });
    }
  }

  @ApiParam({ name: "id", type: "" })
  @Put(":id")
  @ApiBody({ description: "Criação da reserva", type: Reserves })
  async update(
    @Param("id") id: string,
    @Res() res,
    @Body() body
  ): Promise<ReservesModel> {
    const model: ReservesModel = body;
    const isValidDate = function isValidDate(d: Date) {
      return d instanceof Date && !isNaN(+d);
    };
    try {
      let timeOpen = "timeOpen" in body ? new Date(body.timeOpen) : null;
      let timeClose = "timeClose" in body ? new Date(body.timeClose) : null;

      if ("timeOpen" in body && !isValidDate(timeOpen))
        throw "Data de início inválida";

      if ("timeClose" in body && !isValidDate(timeClose))
        throw "Data de término inválida";

      const reservas = await this.service.update(id, model);
      return res.status(200).json({ message: "Alterado com sucesso!" });
    } catch (error) {
      return res.status(400).json({
        message: "Ops! Ocorreu um erro ao alterar as reservas",
        error,
      });
    }
  }

  @ApiParam({ name: "id", type: "" })
  @Delete(":id")
  async delete(@Param("id") id: string, @Res() res): Promise<ReservesModel> {
    try {
      const reserves = await this.service.delete(id);
      return res.status(200).json({ message: "Removido com sucesso!" });
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Ops! Ocorreu um erro ao buscar as reservas", error });
    }
  }
}
