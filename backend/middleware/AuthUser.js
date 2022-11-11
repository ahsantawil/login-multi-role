import Users from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
    if(!req.session.userId) {
        return res.status(401).json({msg: 'Mohon login ke akun anda !!'});
    }
    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: 'User Tidak ditemukan'});
    req.userId = user.id;
    req.role = user.role;
    next();
}

export const adminOnly = async (req, res, next) => {
    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: 'User Tidak ditemukan'});
    if(user.role !== 'admin') return res.status(403).json({msg: 'Akses Terlarang'});
    next();
}