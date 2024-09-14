import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

// @Module 장식자는 이 클래스가 NestJS 모듈임을 나타내며, 어플리케이션의 구성 요소를 묶습니다.
@Module({
  // 이 모듈은 AppController를 포함하여 등록된 컨트롤러를 명시합니다.
  controllers: [AppController],
})
export class AppModule {}