const Product = require('../models/afs_product'); 
const Consumers = require('../models/afs_consumer');
const Area = require('../models/afs_area');
const Users = require('../models/afs_users');
const Delivery = require('../models/afs_delivery');
const Klaim = require('../models/afs_klaim');
const Penggantian = require('../models/afs_pengganti');
const Doc = require('../models/afs_doc');
const Analisa = require('../models/afs_analisa');
const Fis = require('../models/afs_fis');

const path = require('path');
const bcrypt = require('bcryptjs');

module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/viewDashboard', {
            title: 'AFS | dashboard'
        });
    },

    viewPengiriman: (req, res) => {
        res.render('admin/pengiriman/viewPengiriman', {
            title: 'AFS | Pengiriman'
        });
    },
    formPengiriman: (req, res) => {
        res.render('admin/pengiriman/formPengiriman', {
            title : 'AFS | Pengiriman'
        });
    },

    viewAnalisa: (req, res) => {
        res.render('admin/analisa/viewAnalis', {
            title: 'AFS | Analisa'
        });
    },
    viewGaransi: (req, res) => {
        res.render('admin/cekgaransi/viewGaransi', {
            title : 'AFS | Garansi'
        });
    },

    viewCeksn: (req, res) => {
        res.render('admin/ceksn/viewCeksn', {
            title: 'AFS | Cek SN'
        });
    },

    viewConsumers: async (req, res) => {
        try {
            const consumers = await Consumers.find({}).sort({ createdAt: 'descending' });
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            res.render('admin/consumers/viewConsumers', {
                consumers,
                alert,
                title: 'AFS | konsumen'
            });
        } catch (error) {
            res.render('admin/consumers/viewConsumers');
        }
    },
    addConsumers: async (req, res) => {
        try {
            const { uiw } = req.body;
            const cekUiw = await Consumers.findOne({ uiw: req.body.uiw });
            if (cekUiw) {
                req.flash('alertMessage', `Sorry..!! Uiw ${uiw} sudah ada, silahkan masukan uiw yang lain`);
                req.flash('alertStatus', 'warning');
                res.redirect('/admin/consumers');
            } else {
                const query = await Consumers.create({
                    uiw
                });
                req.flash('alertMessage', 'Yeayyy..!! Berhasil tambah UIW   ');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/consumers');
            }
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/consumers');
        }
    },
    editConsumers: async (req, res) => {
        try {
            const { id, uiw } = req.body;
            const consumers = await Consumers.findOne({ _id: id });
            consumers.uiw = uiw;
            const result = await consumers.save();
            req.flash('alertMessage', 'Yeayyy..!! Berhasil update Uiw');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/consumers');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/consumers');
        }
    },
    deleteConsumers: async (req, res) => {
        try {
            const { id } = req.params;
            const consumers = await Consumers.findOne({ _id: id });
            const result = await consumers.remove();
            req.flash('alertMessage', ' Berhasil Hapus Uiw');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/consumers');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/consumers');
        }
    },
    
    viewArea: async (req, res) => {
        try {
            const area = await Area.find({}).sort({ createdAt: 'descending' });
            const uid = await Consumers.find();
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            res.render('admin/area/viewArea', {
                area,
                uid,
                alert,
                title: 'AFS | konsumen'
            });
        } catch (error) {
            res.render('admin/area/viewArea');
        }
    },
    addArea: async (req, res) => {
        try {
            const { area, uiw } = req.body;
            const cekArea = await Area.findOne({ area: req.body.area});
            if (cekArea) {
                req.flash('alertMessage', `Sorry..!! Area ${area} sudah ada, silahkan masukan area lain `);
                req.flash('alertStatus', 'warning');
                res.redirect('/admin/area');
            } else {s
                const query = await Area.create({
                    area,
                    uiw
                });
                req.flash('alertMessage', 'Yeayyy..!! Berhasil tambah Konsumen');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/area');
            }
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/area');
        }
    },
    editArea: async (req, res) => {
        try {
            const { id, area, uiw } = req.body;
            const Up3 = await Area.findOne({ _id: id });
            Up3.area = area;
            Up3.uiw = uiw;
            const result = await Up3.save();
            req.flash('alertMessage', 'Yeayyy..!! Berhasil update Konsumen');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/area');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/area');
        }
        
    },
    deleteArea: async (req, res) => {
        try {
            const { id } = req.params;
            const area = await Area.findOne({ _id: id });
            const result = await area.remove();
            req.flash('alertMessage', ' Berhasil Hapus Konsumen');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/area');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/area');
        }
    },

    viewFis: (req, res) => {
        res.render('admin/fis/viewFis', {
            title : 'AFS | Fis'
        });
    },
    
    viewKlaim: (req, res) => {
        res.render('admin/klaim/viewKlaim', {
            title : 'AFS | klaim'
        });
    },
    formKlaim: (req, res) => {
        res.render('admin/klaim/formKlaim', {
            title : 'AFS | Klaim'
        });  
    },

    viewDocument: (req, res) => {
        res.render('admin/klaim/document/viewDocument', {
            title : 'AFS | doc'
        });
    },
    viewPenggantian: (req, res) => {
        res.render('admin/penggantian/viewPenggantian', {
            title : 'AFS | Penggantian'
        });
    },
    formPenggantian: (req, res) => {
        res.render('admin/penggantian/formPenggantian', {
            title : 'AFS | Penggantian'
        });
    },

    viewProduct: async (req, res) => {
        try {
            const product = await Product.find({}).sort({ createdAt: 'descending' });
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            res.render('admin/product/viewProduct', {
                product,
                alert,
                title : "AFS | Product"
            });
        } catch (error) {
            res.render('admin/product/viewProduct');
        }
    },
    addProduct: async (req, res) => {
        try {
            const { name_product, type_product, spec_product, desc_product } = req.body;
            const cekProduct = await Product.findOne({ name_product: req.body.name_product });
            if (cekProduct) {
                req.flash('alertMessage', `Sorry..!! Produk ini ${name_product} sudah ada, silahkan masukan yang lain`);
                req.flash('alertStatus', 'warning');
                res.redirect('/admin/product');
            } else {
                await Product.create({
                    name_product,
                    type_product,
                    spec_product,
                    desc_product
                });
                req.flash('alertMessage', 'Yeayyy..!! Berhasil tambah produk');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/product');
            }
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/product');
        }
    },
    editProduct: async (req, res) => {
        try {
            const { id, name_product, type_product, spec_product, desc_product } = req.body;
            const product = await Product.findOne({ _id: id });
                product.name_product = name_product;
                product.type_product = type_product;
                product.spec_product = spec_product;
                product.desc_product = desc_product;
            const result = await product.save();
            req.flash('alertMessage', 'Yeayyy..!! Berhasil update produk');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/product');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/product');
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findOne({ _id: id });
            const result = await product.remove();
            req.flash('alertMessage', ' Berhasil Hapus produk');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/product');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/product');
        }
    },

    viewReport: (req, res) => {
        res.render('admin/report/viewReport', {
            title : 'AFS | Report'
        });
    },
    viewSerach: (req, res) => {
        res.render('admin/searchsn/viewSearch', {
            title : 'AFS | Pencarian'
        });
    },

    viewUsers: async(req, res) => {
        try {
            const users = await Users.find({}).sort({ createdAt: 'descending' });
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            res.render('admin/users/viewUsers', {
                users,
                alert,
                title : "AFS | Users"
            });
        } catch (error) {
            res.render('admin/users/viewUsers');
        }
    },
    addUsers: async(req, res) => {
        try {
            const { fullname, username, password, position, level } = req.body;
            const cekUsername = await Users.findOne({ username: req.body.username });
            if ( cekUsername ) {
                req.flash('alertMessage', `Sorry..!! Username ${username} sudah ada, silahkan masukan username yang berbeda`);
                req.flash('alertStatus', 'warning');
                res.redirect('/admin/users');
            } else {
                await Users.create({
                    fullname,
                    username,
                    password,
                    position,
                    level
                });
                req.flash('alertMessage', 'Yeayyy..!! Berhasil tambah Users');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/users');
            }
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/users');
        }
    },
    editUsers: async (req, res) => {
        try {
            const { id, fullname, username, password, position, level } = req.body;
            const users = await Users.findOne({ _id: id });
            users.fullname = fullname;
            users.username = username;
            users.password = password;
            users.position = position;
            users.level = level;
            const result = await users.save();
            req.flash('alertMessage', 'Yeayyy..!! Berhasil update Users');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/users');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/users');
        }
    },
    deleteUsers: async (req, res) => {
        try {
            const { id } = req.params;
            const users = await Users.findOne({ _id: id });
            const result = await users.remove();
            req.flash('alertMessage', ' Berhasil Hapus Users');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/users');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/users');
        }
    }
}