import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockOutputsService } from './stock-outputs.service';
import { CreateStockOutputDto } from './dto/create-stock-output.dto';
import { UpdateStockOutputDto } from './dto/update-stock-output.dto';

@Controller('stock-outputs')
export class StockOutputsController {
  constructor(private readonly stockOutputsService: StockOutputsService) {}

  @Post()
  create(@Body() createStockOutputDto: CreateStockOutputDto) {
    return this.stockOutputsService.create(createStockOutputDto);
  }

  @Get()
  findAll() {
    return this.stockOutputsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockOutputsService.findOne(+id);
  }
}
