const bcrypt = require('bcryptjs');

const model = require('../models/index');

module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/viewDashboard');
    },

    viewPengiriman: (req, res) => {
        res.render('admin/pengiriman/viewPengiriman');
    },

    viewAnalisa: (req, res) => {
        res.render('admin/analisa/viewAnalis');
    },
    viewGaransi: (req, res) => {
        res.render('admin/cekgaransi/viewGaransi');
    },

    viewCeksn: (req, res) => {
        res.render('admin/ceksn/viewCeksn');
    },

    viewConsumers: (req, res) => {
        res.render('admin/consumers/viewConsumers');
    },
    viewFis: (req, res) => {
        res.render('admin/fis/viewFis');
    },
    viewKlaim: (req, res) => {
        res.render('admin/klaim/viewKlaim');
    },
    viewDocument: (req, res) => {
        res.render('admin/klaim/document/viewDocument');
    },
    viewPenggantian: (req, res) => {
        res.render('admin/penggantian/viewPenggantian');
    },
    viewProduct: (req, res) => {
        res.render('admin/product/viewProduct');
    },
    viewReport: (req, res) => {
        res.render('admin/report/viewReport');
    },
    viewSerach: (req, res) => {
        res.render('admin/searchsn/viewSearch');
    },

    viewUsers: async (req, res) => {
        try {
            const users = await model.afs_users.findAll();
            res.render('admin/users/viewUsers', {
                users,
            });
        } catch (error) {
            res.redirect('/admin/users');
        }
    },
    addUsers: async (req, res) => {
        try {
            const {
                fullname,
                username,
                password,
                position,
                level
            } = req.body;
            await model.afs_users.create({
                fullname,
                username,
                password,
                position,
                level
            });
            res.redirect('/admin/users');
        } catch (error) {
            res.redirect('/admin/users');
        }
    },
    editUsers: async (req, res) => {
        try {
            const {
                id,
                fullname,
                username,
                password,
                position,
                level
            } = req.body;
            const users = await model.afs_users.findOne({
                _id: id
            });
            users.fullname = fullname;
            users.username = username;
            users.password = password;
            users.position = position;
            users.level = level;
            await users.save();
            res.redirect('/admin/users');
        } catch (error) {
            res.redirect('/admin/users');
        }
    },
    deleteUsers: async (req, res) => {
        try {
            const {
                id
            } = req.params;
            const users = await model.afs_users.findOne({
                _id: id
            });
            await users.remove();
            res.redirect('/admin/users');
        } catch (error) {
            res.redirect('/admin/users');
        }
    }
}