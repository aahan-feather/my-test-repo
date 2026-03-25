import request from 'supertest';
import app from '../app';

describe('POST /api/echo', () => {
  it('returns 200 status code', async () => {
    const res = await request(app).post('/api/echo').send({ message: 'hello' });
    expect(res.status).toBe(200);
  });

  it('echoes back the request body', async () => {
    const body = { message: 'hello', value: 42 };
    const res = await request(app).post('/api/echo').send(body);
    expect(res.body.echo).toEqual(body);
  });

  it('response body has timestamp field', async () => {
    const res = await request(app).post('/api/echo').send({ foo: 'bar' });
    expect(res.body).toHaveProperty('timestamp');
  });

  it('echoes an empty body', async () => {
    const res = await request(app).post('/api/echo').send({});
    expect(res.status).toBe(200);
    expect(res.body.echo).toEqual({});
  });
});
