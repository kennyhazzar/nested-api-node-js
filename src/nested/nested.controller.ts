import { Controller, Get, Post, Query } from '@nestjs/common';
import { CreateObjectDto } from './dto/nested.dto';
import { NestedService } from './nested.service';

@Controller('v1')
export class NestedController {
  constructor(private readonly nestedService: NestedService) {}

  @Post('create')
  async createObject(@Query('name') name: string): Promise<CreateObjectDto> {
    return this.nestedService.createObject(name);
  }

  @Post('add')
  async addChildrenToParentObject(
    @Query('name') name: string,
    @Query('parentId') id: string,
  ) {
    return this.nestedService.addChildrenToObjectById(id, name);
  }

  @Get('all')
  async getAllObjects() {
    return this.nestedService.findAll();
  }

  @Get('deep')
  async getNested(@Query('id') id: string) {
    return this.nestedService.updateNestedObjectsById(id);
  }
}
