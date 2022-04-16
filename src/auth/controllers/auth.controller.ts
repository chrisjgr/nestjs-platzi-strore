import {
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { SanitizeMongooseModelInterceptor } from 'nestjs-mongoose-exclude';

import { AuthService } from '../services/auth.service';
import { User } from 'src/users/entities/user.entity';

@UseInterceptors(
  new SanitizeMongooseModelInterceptor({
    excludeMongooseId: false,
    excludeMongooseV: true,
  }),
) // Decorator que no me devuelve la contraseña
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  @Post('login')
  login(@Req() req: Request) {
    const user = req.user as User;

    return this.authService.generateJWT(user);
  }
}
