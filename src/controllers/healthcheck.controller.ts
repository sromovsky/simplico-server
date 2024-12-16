import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from '../services/healthcheck.service';
import { Healthcheck } from '../types/healthcheck.type';

@Controller('healthcheck')
export class HealthcheckController {
    constructor(private readonly healthcheckService: HealthcheckService) {}

    @Get()
    getHealthcheck(): Healthcheck {
        return this.healthcheckService.getHealthcheck();
    }
}
