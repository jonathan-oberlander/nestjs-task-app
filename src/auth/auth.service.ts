import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authCrendentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCrendentialsDto);
  }

  async signIn(authCrendentialsDto: AuthCredentialsDto) {
    const username = await this.userRepository.validateUserPassword(
      authCrendentialsDto,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
