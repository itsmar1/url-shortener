const Url = require('../models/ShortUrl');

exports.getLongUrl = async (req, res, next) => {

    try {
        const url = await Url.findOne({ shortUrl: req.params.shortId });

        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No URL Found');
        }
    } catch (error) {
        console.log(error);
    }
};