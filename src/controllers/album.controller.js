import { Album } from "../models/album.js"

export const getAlbums = async (req, res) => {
    const albums = await Album.findAll()
    console.log(albums)
    res.json(albums)
}

export const getAlbum = async (req, res) => {
    try {
        const { id } = req.params
        const album = await Album.findOne({
            where: {
                id
            }
        })
        res.json(album)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createAlbum = async (req, res) => {
    const { albumName, creator, releaseDate, birthday, price, genre, image } = req.body

    const newAlbum = await Album.create({
        albumName,
        creator,
        releaseDate,
        birthday,
        price,
        genre,
        image
    })

    console.log(newAlbum)
    res.json(newAlbum)
}

export const updateAlbum = async (req, res) => {
    try {
        const { id } = req.params;
        const { albumName, creator, releaseDate, birthday, price, genre, image } = req.body

        const album = await Album.findByPk(id)
        console.log(album)

        album.albumName = albumName
        album.creator = creator
        album.releaseDate = releaseDate
        album.birthday = birthday
        album.price = price
        album.genre = genre
        album.image = image
        await album.save()

        res.json(album)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const deleteAlbum = async (req, res) => {
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