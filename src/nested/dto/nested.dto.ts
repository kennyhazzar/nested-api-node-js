import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({ example: 'UXh9hGu5D', description: 'object id' })
  id: string;
  @ApiProperty({ example: 'Daniel', description: 'name of object' })
  name: string;
  @ApiProperty({
    example: [
      {
        id: 'GOnXbRVPb',
        name: 'children',
        parentId: 'GG0otmjX5',
      },
      {
        id: 'BzK8_i54a',
        name: 'some-another-children',
        parentId: 'GG0otmjX5',
      },
    ],
    description: 'a list of childrens in this parent',
  })
  childrens: ICategory[];
}

export class ICategory {
  category: CategoryDto;
}

export class Category {
  @ApiProperty({ example: 'UXh9hGu5D', description: 'object id' })
  id: string;
  @ApiProperty({ example: 'Daniel', description: 'name of object' })
  name: string;
  @ApiProperty({
    example: [
      {
        id: 'GOnXbRVPb',
        name: 'children',
        parentId: 'GG0otmjX5',
      },
      {
        id: 'BzK8_i54a',
        name: 'some-another-children',
        parentId: 'GG0otmjX5',
      },
    ],
    description: 'a list of childrens in this parent',
  })
  children?: Children[];
}

export class Children {
  id: string;
  name: string;
  parentId: string;
}

export class CreateObjectDto {
  @ApiProperty({ example: 'error', description: 'result of http request' })
  result: 'success' | 'error';
  @ApiProperty({
    example: {
      id: 'GG0otmjX5',
      name: 'parent',
    },
    description: 'data adding result',
  })
  data: Category;
}

export class AddObjectDto {
  @ApiProperty({ example: 'error', description: 'result of http request' })
  result: 'success' | 'error';
  @ApiProperty({
    example: {
      id: 'GG0otmjX5',
      name: 'parent',
    },
    description: 'data adding result',
  })
  data: Category;
}
