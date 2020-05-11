import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReservesModule } from "./reserves/reserves.module";
import ENV from "./env";

@Module({
  imports: [
    MongooseModule.forRoot(ENV.db_url, { useNewUrlParser: true }),
    ReservesModule,
  ],
})
export class AppModule {}
