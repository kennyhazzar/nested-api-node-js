import { Controller } from '@nestjs/common';
import { NestedService } from './nested.service';

@Controller('nested')
export class NestedController {
  constructor(private readonly nestedService: NestedService) {}
}
