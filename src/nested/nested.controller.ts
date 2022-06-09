import { Controller, Get, Post, Query } from '@nestjs/common';
import { AddObjectDto, Category, CreateObjectDto } from './dto/nested.dto';
import { NestedService } from './nested.service';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('nested')
@Controller('v1')
export class NestedController {
  constructor(private readonly nestedService: NestedService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create parent' })
  @ApiResponse({ status: 201, description: 'parent create successfully' })
  async createObject(@Query('name') name: string): Promise<CreateObjectDto> {
    return this.nestedService.createObject(name);
  }

  @Post('add')
  @ApiOperation({ summary: 'Create children' })
  @ApiResponse({
    status: 201,
    description: 'children add to parent successfully',
    type: AddObjectDto,
  })
  async addChildrenToParentObject(
    @Query('name') name: string,
    @Query('parentId') id: string,
  ): Promise<AddObjectDto> {
    return this.nestedService.addChildrenToObjectById(id, name);
  }

  @Get('all')
  @ApiOperation({ summary: 'Return all records from db' })
  @ApiResponse({
    status: 200,
    description: 'Return all records from db',
    type: Category,
  })
  async getAllObjects(): Promise<Category[]> {
    return this.nestedService.findAll();
  }

  @Get('deep')
  @ApiOperation({ summary: 'Find deep childrens on parent' })
  @ApiResponse({
    status: 200,
    description: 'find childrens',
    type: Category,
  })
  async getNested(@Query('id') id: string): Promise<Category[]> {
    return this.nestedService.updateNestedObjectsById(id);
  }
}
