import request from 'supertest';
import app from '../app';

describe('GET /api/status', () => {
  it('returns 200 status code', async () => {
    const res = await request(app).get('/api/status');
    expect(res.status).toBe(200);
  });

  it('response body has node version', async () => {
    const res = await request(app).get('/api/status');
    expect(res.body).toHaveProperty('node');
    expect(res.body.node).toBe(process.version);
  });

  it('response body has platform and arch', async () => {
    const res = await request(app).get('/api/status');
    expect(res.body).toHaveProperty('platform');
    expect(res.body).toHaveProperty('arch');
  });

  it('response body has uptime as a number', async () => {
    const res = await request(app).get('/api/status');
    expect(res.body).toHaveProperty('uptime');
    expect(typeof res.body.uptime).toBe('number');
  });

  it('response body has memory breakdown', async () => {
    const res = await request(app).get('/api/status');
    expect(res.body).toHaveProperty('memory');
    expect(res.body.memory).toHaveProperty('rss');
    expect(res.body.memory).toHaveProperty('heapTotal');
    expect(res.body.memory).toHaveProperty('heapUsed');
    expect(res.body.memory).toHaveProperty('external');
  });

  it('response body has timestamp field', async () => {
    const res = await request(app).get('/api/status');
    expect(res.body).toHaveProperty('timestamp');
  });
});
