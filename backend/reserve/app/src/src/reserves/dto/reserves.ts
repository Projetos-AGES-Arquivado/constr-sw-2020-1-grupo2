import { ApiProperty } from "@nestjs/swagger";

export class Reserves {
  @ApiProperty()
  idResources: [];

  @ApiProperty()
  idUser: string;

  @ApiProperty()
  idSubject: string;

  @ApiProperty()
  timeOpen: string;

  @ApiProperty()
  timeClose: string;
}
