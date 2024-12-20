import { Injectable } from '@nestjs/common';
import { Healthcheck } from '../../types/healthcheck.interface';
import { version } from '../../../package.json';

@Injectable()
export class HealthcheckService {
    getHealthcheck(): Healthcheck {
        return { version };
    }
}
