import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  // constructor(private authService: AuthService) {}

  // @UsePipes(ValidationPipe)
  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto) {
    // this.authService.signUp(authCredentialsDto);
    console.log(authCredentialsDto);
  }
}
