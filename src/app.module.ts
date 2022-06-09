import { Module } from '@nestjs/common';
import { NestedController } from './nested/nested.controller';
import { NestedModule } from './nested/nested.module';
import { NestedService } from './nested/nested.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Nested, NestedSchema } from './schemas/nested.schema';

@Module({
  imports: [
    NestedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env.production.local'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: Nested.name, schema: NestedSchema }]),
  ],
  controllers: [NestedController],
  providers: [NestedService],
})
export class AppModule {}
