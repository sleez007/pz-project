exports.getIndex = (req, res, next ) => {
    res.render('main/index', {});
}

exports.getLogin = (req, res, next ) => {
    res.render('main/login', {});
}

exports.getSignup = (req, res, next ) => {
    res.render('main/signup', {});
}

