import { Test, TestingModule } from '@nestjs/testing';
import { StockOutputsService } from './stock-outputs.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('StockOutputsService', () => {
  let service: StockOutputsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockOutputsService],
    }).compile();

    service = module.get<StockOutputsService>(StockOutputsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
