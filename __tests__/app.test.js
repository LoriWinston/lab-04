const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

// jest.mock('../lib/utils/aws');
// const s3Client = require('../lib/utils/aws');

// jest.mock('s3Client', () => () => ({
//   uploads: {
//     create: jest.fn(),
//   },
// }));


describe('CRUD routes for managing files in s3', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let upload;
  beforeEach(async() => {
    upload = await Upload.insert({ 
      fileName: 'testfile.txt',
      
    // s3Client.mockReset();
  });

  it('post creates a new file in db and uploads to s3', async () => {
    const res = await request(app)
      .post('/api/v1/uploads')
      .send({ fileName: 'testfile.txt' });

      expect(res.body).toEqual({
      id: '2',
      filePath: 'textfile.txt',
    });
  });
});
