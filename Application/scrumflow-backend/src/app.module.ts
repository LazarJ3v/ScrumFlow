import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [TaskModule, PrismaModule, AuthModule, UserModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
