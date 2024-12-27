import { Hono } from 'hono';
import { authApi } from './api/auth';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404));

app.route('/api', authApi);

export default app;
