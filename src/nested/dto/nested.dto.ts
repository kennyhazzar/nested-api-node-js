export class CategoryDto {
  id: string;
  name: string;
  childrens: ICategory[];
}

export class ICategory {
  category: CategoryDto;
}

export class Category {
  id: string;
  name: string;
  children?: Children[];
}

export class Children {
  id: string;
  name: string;
  parentId: string;
}

export class CreateObjectDto {
  result: 'success' | 'error';
  data: Category;
}

export class AddObjectDto {
  result: 'success' | 'error';
  data: Category;
}
