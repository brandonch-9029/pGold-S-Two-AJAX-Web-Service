'use strict';

const request = require('supertest');
const app = require('./app');

describe('Test website service', () => {
    test('GET /periods succeeds', () => {
        return request(app)
        .get('/periods')
        .expect(200);
    });
    test('GET /periods returns JSON', () => {
        return request(app)
        .get('/periods')
        .expect('Content-type', /json/);
    });
    test('GET /artlinks succeeds', () => {
        return request(app)
        .get('/artlinks')
        .expect(200);
    });
    test('GET /artlinks returns JSON', () => {
        return request(app)
        .get('/artlinks')
        .expect('Content-type', /json/);
    });
    test('POST /submit succeeds', () => {
        return request(app)
        .post('/submit')
        .expect(201);
    });
});