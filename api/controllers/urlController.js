const Url = require('../models/ShortUrl');

exports.getLongUrl = async (req, res, next) => {

    try {
        const url = await Url.findOne({ shortUrl: req.params.shortId });

        if (url) {
            url.clicks += 1;
            await url.save();
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No URL Found');
        }
    } catch (error) {
        console.log(error);
    }
};