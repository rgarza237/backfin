import { Song } from "../models/song.js"

export const getSongs = async (req, res) => {
    const songs = await Song.findAll()
    console.log(songs)
    res.json(songs)
}

export const getSong = async (req, res) => {
    try {
        const { id } = req.params
        const song = await Song.findOne({
            where: {
                id
            }
        })
        res.json(song)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createSong = async (req, res) => {
    const { name, releaseDate, duration, completeFile, favorite  } = req.body

    const newSong = await Song.create({
        name,
        releaseDate,
        duration,
        completeFile,
        favorite
    })

    console.log(newSong)
    res.json(newSong)
}

export const updateSong = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, releaseDate, duration, completeFile, favorite } = req.body

        const song = await Song.findByPk(id)
        console.log(song)

        song.name = name
        song.releaseDate = releaseDate
        song.duration = duration
        song.completeFile = completeFile
        song.favorite = favorite
        await song.save()

        res.json(song)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const deleteSong = async (req, res) => {
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