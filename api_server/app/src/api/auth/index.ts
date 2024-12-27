import { OpenAPIHono } from '@hono/zod-openapi';
import { signUpHandler, signUpRoute } from './signUp';

export const authApi = new OpenAPIHono();

authApi.openapi(signUpRoute, signUpHandler);
