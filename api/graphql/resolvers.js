const validUrl = require('valid-url');
const shortId = require('shortid');

const ShortUrl = require('../models/ShortUrl');


module.exports = {
    shortenUrl: async ({ longUrl }, req) => {
        // Check if the URL is Valid
        if (!validUrl.isWebUri(longUrl)) {
            const error = new Error("Invalid URL");
            error.statusCode = 422;
            throw error;
        }

        // generate a short id and check if it exists in db
        let theId;
        let exists;
        do {
            theId = shortId.generate();
            const existingId = await ShortUrl.findOne({ shortUrl: theId });
            if (existingId) {
                exists = true;
            } else {
                exists = false;
            }
        } while (exists);

        // save to db
        const url = new ShortUrl({
            longUrl: longUrl,
            shortUrl: theId
        });

        const createdUrl = await url.save();
        return createdUrl;
    },

    getLongUrl: async ({ shortUrl }) => {
        const theUrl = await ShortUrl.findOne({ shortUrl: shortUrl });
        
        if (!theUrl) {
            const error = new Error("Short Url NOT FOUND!");
            error.statusCode = 404;
            throw error;
        }

        theUrl.clicks += 1;
        const payload = await theUrl.save();

        return payload;
    },

    getClicks: async ({ shortUrl }) => {
        const theUrl = await ShortUrl.findOne({ shortUrl: shortUrl });

        if (!theUrl) {
            const error = new Error("Short Url NOT FOUND!");
            error.statusCode = 404;
            throw error;
        }

        return  theUrl;
    },

    getShortUrl: async ({ longUrl }) => {
        const theUrl = await ShortUrl.findOne({ longUrl: longUrl });

        if (!theUrl) {
            const error = new Error("Short Url NOT FOUND!");
            error.statusCode = 404;
            throw error;
        }

        return  theUrl;
    }
}