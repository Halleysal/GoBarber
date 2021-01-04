import { Request, Response } from 'express';

import { container } from 'tsyringe';

import AuthUserService from '@modules/users/services/AuthUserService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUser = container.resolve(AuthUserService);

    const { user, token } = await authenticateUser.execute({ email, password });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return res.json({ userWithoutPassword, token });
  }
}
