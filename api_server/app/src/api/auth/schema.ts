import { z } from '@hono/zod-openapi';

// NOTE: リクエストモデル
export const SignUpRequestSchema = z
  .object({
    name: z.string().openapi({ example: 'test_name' }),
    email: z.string().openapi({ example: 'test@example.com' }),
    password: z.string().openapi({ example: 'password' }),
  })
  .openapi('SignUpRequestSchema');

export const SignUpValidationErrorSchema = z
  .object({
    name: z.string().array(),
    email: z.string().array(),
    password: z.string().array(),
  })
  .openapi('SignUpValidationErrorSchema');

// NOTE: レスポンスモデル
export const SignUpResponseSchema = z
  .object({
    validationErrors: SignUpValidationErrorSchema,
  })
  .openapi('SignUpResponseSchema');
