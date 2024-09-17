const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const scrapeLaptops = async () => {
    let laptops = [];
    let page = 1;
    let doesNextPageExists = true;

    while (doesNextPageExists) {
        try {
            const { data } = await axios.get(`https://webscraper.io/test-sites/e-commerce/static/computers/laptops?page=${page}`);
            const $ = cheerio.load(data);

            $('.thumbnail').each((index, element) => {
                const name = $(element).find('.title').text().trim();
                const price = parseFloat($(element).find('.price').text().replace('$', '').trim());

                laptops.push({ name, price });
            });

            const nextPageLink = $('.pagination').find('li.page-item.active').next().find('a.page-link').attr('href');

            doesNextPageExists = !!nextPageLink;

            page = page + 1;
        } catch (error) {
            doesNextPageExists = false;
            return {
                message: 'Error while scraping. Try again later',
                code: error.code,
            }

        }
    }

    return laptops;
};

app.get('/notebooks', async (req, res) => {
    try {
        const laptops = await scrapeLaptops();

        laptops.sort((a, b) => a.price - b.price);

        res.json(laptops);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = app;