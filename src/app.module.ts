import { Module } from '@nestjs/common';
import { NestedController } from './nested/nested.controller';
import { NestedModule } from './nested/nested.module';
import { NestedService } from './nested/nested.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NestedModule, MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [NestedController],
  providers: [NestedService],
})
export class AppModule {}
