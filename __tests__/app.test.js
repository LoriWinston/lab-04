const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/utils/aws');
const s3Client = require('../lib/utils/aws');

jest.mock('s3Client', () => () => ({
  uploads: {
    create: jest.fn(),
  },
}));

const fs = require('fs');
const AWS = require('aws-sdk');



describe('crud routes for managing files in s3', () => {
  beforeEach(() => {
    return setup(pool);
  });
});
  let upload;
  beforeEach(async() => {
   upload = await Upload.insert({ 
     fileName: "testFile",
     fileBody: fileContent
    })

  });