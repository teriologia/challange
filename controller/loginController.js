const loginOption = {
    email: 'example@example.com',
    password: 'dummy1234',
    islogin: false,
}

const loginController = (req, res, next) =>{
    const { email, password } = req.body;
    if(email === loginOption.email && password === loginOption.password)
    {
        res.locals.islogin = !loginOption.islogin;
    }
    else{
        res.locals.islogin = loginOption.islogin;
    }
    next();
}

module.exports = loginController;