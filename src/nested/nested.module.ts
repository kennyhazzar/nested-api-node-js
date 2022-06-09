import { Module } from '@nestjs/common';
import { NestedService } from './nested.service';
import { NestedController } from './nested.controller';

@Module({
  imports: [],
  controllers: [NestedController],
  providers: [NestedService],
})
export class NestedModule {}
