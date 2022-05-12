import { Singer } from "../models/singer.js"

export const getSingers = async (req, res) => {
    const singers = await Singer.findAll()
    console.log(singers)
    res.json(singers)
}

export const getSinger = async (req, res) => {
    try {
        const { id } = req.params
        const singer = await Singer.findOne({
            where: {
                id
            }
        })
        res.json(singer)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createSinger = async (req, res) => {
    const { name, lastName, nationality /*albumId*/ } = req.body

    const newSinger = await Singer.create({
        name,
        lastName,
        nationality
    //    albumId
    })

    console.log(newSinger)
    res.json(newSinger)
}

export const updateSinger = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, lastName, nationality } = req.body

        const singer = await Singer.findByPk(id)
        console.log(singer)

        singer.name = name
        singer.lastName = lastName
        singer.nationality = nationality
        await singer.save()

        res.json(singer)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const deleteSinger = async (req, res) => {
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