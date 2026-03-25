import request from 'supertest';
import app from '../app';
import { name, version, description } from '../../package.json';

describe('GET /api/info', () => {
  it('returns 200 status code', async () => {
    const res = await request(app).get('/api/info');
    expect(res.status).toBe(200);
  });

  it('response body has app name and version from package.json', async () => {
    const res = await request(app).get('/api/info');
    expect(res.body).toHaveProperty('name', name);
    expect(res.body).toHaveProperty('version', version);
  });

  it('response body has description from package.json', async () => {
    const res = await request(app).get('/api/info');
    expect(res.body).toHaveProperty('description', description);
  });

  it('response body has environment field', async () => {
    const res = await request(app).get('/api/info');
    expect(res.body).toHaveProperty('environment');
    expect(typeof res.body.environment).toBe('string');
  });

  it('response body has timestamp field', async () => {
    const res = await request(app).get('/api/info');
    expect(res.body).toHaveProperty('timestamp');
    expect(new Date(res.body.timestamp).toISOString()).toBe(res.body.timestamp);
  });
});
