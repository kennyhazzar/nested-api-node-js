import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nested, NestedDocument } from 'src/schemas/nested.schema';
import * as shortid from 'shortid';
import { AddObjectDto, Category, CreateObjectDto } from './dto/nested.dto';

@Injectable()
export class NestedService {
  constructor(
    @InjectModel(Nested.name) private nestedModel: Model<NestedDocument>,
  ) {}

  async createObject(name: string, shortId?: string): Promise<CreateObjectDto> {
    const id = shortId || shortid.generate();
    const createdParent = await this.nestedModel.create({
      id,
      name,
    });
    const result = await createdParent.save();
    return {
      result: 'success',
      data: {
        id: result.id,
        name: result.name,
      },
    };
  }

  async addChildrenToObjectById(
    parentId: string,
    name: string,
  ): Promise<AddObjectDto> {
    const parent = await this.nestedModel.findOne({ parentId });
    if (!parent) {
      throw new HttpException(
        {
          result: 'error',
          error: 'Parent does not exists',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const childrenId = shortid.generate();

    parent.children.push({
      id: childrenId,
      name,
      parentId: parent.id,
    });

    this.createObject(name, childrenId);

    const result = await parent.save();
    return {
      result: 'success',
      data: {
        id: result.id,
        name: result.name,
      },
    };
  }

  async updateNestedObjectsById(id: string) {
    const nestedObjects = await this.nestedModel.find({ 'children.id': id });
    return nestedObjects;
  }

  async findObjectById(id: string): Promise<Category> {
    const result = await this.nestedModel.findOne({ id });
    if (!result) {
      throw new HttpException(
        {
          result: 'error',
          error: 'Object does not exists',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async findAll() {
    return this.nestedModel.find().exec();
  }
}
