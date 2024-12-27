import { createRoute, RouteHandler, z } from '@hono/zod-openapi';
import { SignUpResponseSchema, SignUpValidationErrorSchema } from './schema';
import { ErrorResponse } from '../../schema';

export const signUpRoute = createRoute({
  path: 'auth/sign_up',
  method: 'post',
  description: '会員登録',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SignUpResponseSchema,
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: ErrorResponse,
        },
      },
    },
  },
});

type SignUpValidationError = z.infer<typeof SignUpValidationErrorSchema>;
// type SignUpRequest = z.infer<typeof SignUpRequestSchema>;

export const signUpHandler: RouteHandler<typeof signUpRoute> = async (c) => {
  // const params = await c.req.json<SignUpRequest>();
  // console.log(params);

  const validationErrors: SignUpValidationError = {
    name: [],
    email: [],
    password: [],
  };
  try {
    return c.json({ validationErrors }, 200);
  } catch (e) {
    return c.json({ message: 'Internal Server Error', stackTrace: e }, 500);
  }
};
