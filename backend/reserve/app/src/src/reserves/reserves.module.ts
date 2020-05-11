import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservesService } from './reserves.service';
import { ReservesSchema } from './schemas/reserves.schema';
import { ReservesController } from './reserves.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reserves', schema: ReservesSchema }]),
  ],
  providers: [ReservesService],
  exports: [ReservesService],
  controllers: [ReservesController],
})
export class ReservesModule {}
