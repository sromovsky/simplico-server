import { Module } from '@nestjs/common';
import { HealthcheckController } from './controllers/healthcheck.controller';
import { HealthcheckService } from './services/healthcheck.service';

@Module({
    imports: [],
    controllers: [HealthcheckController],
    providers: [HealthcheckService],
})
export class AppModule {}
