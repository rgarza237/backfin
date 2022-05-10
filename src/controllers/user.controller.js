export const getUser = (req, res) => {
    res.send('getting user')
}

export const createUser = (req, res) => {
    console.log(req.body)
    res.send('creating user')
}