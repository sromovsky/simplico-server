import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { HealthcheckModule } from './modules/healthcheck/healthcheck.module';

@Module({
    imports: [HealthcheckModule, AuthModule],
})
export class AppModule {}
