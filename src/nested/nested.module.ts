import { Module } from '@nestjs/common';
import { NestedService } from './nested.service';
import { NestedController } from './nested.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nested, NestedSchema } from 'src/schemas/nested.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Nested.name, schema: NestedSchema }]),
  ],
  controllers: [NestedController],
  providers: [NestedService],
})
export class NestedModule {}
