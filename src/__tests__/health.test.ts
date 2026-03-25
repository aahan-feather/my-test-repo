import request from 'supertest';
import app from '../app';

describe('GET /health', () => {
  it('returns 200 status code', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
  });

  it('response body has status "ok"', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('ok');
  });

  it('response body has timestamp field', async () => {
    const res = await request(app).get('/health');
    expect(res.body).toHaveProperty('timestamp');
  });

  it('response body has uptime field', async () => {
    const res = await request(app).get('/health');
    expect(res.body).toHaveProperty('uptime');
  });
});
