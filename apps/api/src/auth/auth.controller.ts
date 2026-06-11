import { Controller, Post, Body, UnauthorizedException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  @Post("login")
  login(@Body() body: { email: string; senha: string }) {
    const usuarios: Record<
      string,
      { nome: string; papel: string; token: string }
    > = {
      "admin@onganizator.com.br": {
        nome: "Administrador",
        papel: "admin",
        token: "mock-token-admin",
      },
      "avaliador@onganizator.com.br": {
        nome: "Equipe Avaliadora",
        papel: "avaliador",
        token: "mock-token-avaliador",
      },
      "ong@demo.org": {
        nome: "Pantanal Vivo",
        papel: "organizacao",
        token: "mock-token-ong",
      },
      "investidor@demo.com.br": {
        nome: "Investidor Social Demo",
        papel: "investidor",
        token: "mock-token-investidor",
      },
    };

    const usuario = usuarios[body.email];
    if (!usuario || body.senha !== "demo@2026") {
      throw new UnauthorizedException(
        "Credenciais inválidas. Use senha: demo@2026",
      );
    }

    return {
      token: usuario.token,
      nome: usuario.nome,
      papel: usuario.papel,
      expiraEm: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(),
    };
  }
}
