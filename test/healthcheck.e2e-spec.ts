import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('HealthcheckController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/healthcheck (GET)', () => {
        return request(app.getHttpServer())
            .get('/healthcheck')
            .expect(200)
            .expect((res) => {
                expect(res.body).toHaveProperty('version');
            });
    });
});
