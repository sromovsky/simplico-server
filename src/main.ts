import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_PORT, SERVER_PREFIX } from './config/app.config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(SERVER_PREFIX);
    await app.listen(SERVER_PORT);
}
bootstrap().then(() => {
    console.log(`[App] Application is running!`);
    console.log(
        `[App] Healthcheck: http://localhost:${SERVER_PORT}/${SERVER_PREFIX}/healthcheck`,
    );
});
