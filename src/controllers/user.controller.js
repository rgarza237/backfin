import { User } from "../models/user.js"

export const getUsers = async (req, res) => {
    const users = await User.findAll()
    console.log(users)
    res.json(users)
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: {
                id
            }
        })
        res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const { name, email, password } = req.body

    const newUser = await User.create({
        name,
        email,
        password
    })

    console.log(newUser)
    res.json(newUser)
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body

        const user = await User.findByPk(id)
        console.log(user)

        user.name = name
        user.email = email
        user.password = password
        await user.save()

        res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await PromiseRejectionEvent.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}