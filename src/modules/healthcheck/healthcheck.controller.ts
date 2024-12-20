import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { Healthcheck } from '../../types/healthcheck.interface';

@Controller('healthcheck')
export class HealthcheckController {
    constructor(private readonly healthcheckService: HealthcheckService) {}

    @Get()
    getHealthcheck(): Healthcheck {
        return this.healthcheckService.getHealthcheck();
    }
}
