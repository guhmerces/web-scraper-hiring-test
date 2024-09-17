const nock = require('nock');
const app = require('../../app');
const { default: axios } = require('axios');

describe('GET /api/notebooks', () => {
  let server = {}
  beforeAll(() => {
    server = app.listen(3000, () => {
      console.log("Server running on port 3000 🚀🌎");
    });
  })

  beforeAll(() => {
    nock('https://webscraper.io')
      .get('/test-sites/e-commerce/static/computers/laptops?page=1')
      .reply(200, `
        <html>              
        <body>
          <div>
            <div class="card thumbnail">
              <div class="caption">
                <h4 class="price float-end card-title pull-right">$1000.00</h4>
                <h4>
                  <a href="-" class="title" title="The best laptop 1"> The best laptop 1 </a>
                </h4>
                <p class="description card-text">The best laptop 1 description</p>
              </div>
              <p class="review-count float-end">1 reviews</p>
            </div>
            <div class="card thumbnail">
              <div class="caption">
                <h4 class="price float-end card-title pull-right">$2000.00</h4>
                <h4>
                  <a href="-" class="title" title="The best laptop 2"> The best laptop 2 </a>
                </h4>
                <p class="description card-text">The best laptop 2 description</p>
              </div>
              <p class="review-count float-end">2 reviews</p>
            </div>
            
          </div>
          <nav>
            <ul class="pagination">
              <li class="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
                <span class="page-link" aria-hidden="true">&lsaquo;</span>
              </li>
              <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
              <li class="page-item active" aria-current="page"><span class="page-link">2</span></li>
              <li class="page-item">
                <a class="page-link" href="/test-sites/e-commerce/static/computers/laptops?page=2" rel="next"
                  aria-label="Next &raquo;">&rsaquo;</a>
              </li>
            </ul>
          </nav>
        </body>
        </html>
      `);

    nock('https://webscraper.io')
      .get('/test-sites/e-commerce/static/computers/laptops?page=2')
      .reply(200, `<html><body>
          <div>
            <div class="card thumbnail">
              <div class="caption">
                <h4 class="price float-end card-title pull-right">$999.00</h4>
                <h4>
                  <a href="-" class="title" title="The best laptop 3"> The best laptop 3 </a>
                </h4>
                <p class="description card-text">The best laptop 3 description</p>
              </div>
              <p class="review-count float-end">3 reviews</p>
            </div>
      </body></html>`);
  });

  afterAll(() => {
    nock.cleanAll();
    server.close(() => {});
  });

  it('should return all notebooks sorted by price', async () => {
    const res = await axios.get('http://localhost:3000/notebooks');

    expect(res.status).toBe(200);
    expect(res.data).toEqual([
      { name: 'The best laptop 3', price: 999, description: "The best laptop 3 description", reviewCount: '3 reviews' },
      { name: 'The best laptop 1', price: 1000, description: "The best laptop 1 description", reviewCount: '1 reviews' },
      { name: 'The best laptop 2', price: 2000, description: "The best laptop 2 description", reviewCount: '2 reviews' },
    ]);
  });
});
