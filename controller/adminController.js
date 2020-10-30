const Product = require('../models/afs_product'); 

const bcrypt = require('bcryptjs');

module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/viewDashboard');
    },

    viewPengiriman: (req, res) => {
        res.render('admin/pengiriman/viewPengiriman');
    },
    formPengiriman: (req, res) => {
        res.render('admin/pengiriman/formPengiriman');
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
        res.render('admin/consumers/viewConsumers')
    },
    addConsumers: (req, res) => {
        res.render('admin/consumers');
    },

    viewFis: (req, res) => {
        res.render('admin/fis/viewFis');
    },
    
    viewKlaim: (req, res) => {
        res.render('admin/klaim/viewKlaim');
    },
    formKlaim: (req, res) => {
        res.render('admin/klaim/formKlaim');  
    },

    viewDocument: (req, res) => {
        res.render('admin/klaim/document/viewDocument');
    },
    viewPenggantian: (req, res) => {
        res.render('admin/penggantian/viewPenggantian');
    },

    viewProduct: async (req, res) => {
        try {
            const product = await Product.find();
            res.render('admin/product/viewProduct', { product });
        } catch (error) {
            res.render('admin/product/viewProduct');
        }
    },
    addProduct: async (req, res) => {
        const { name_product, type_product, spec_product, desc_product } = req.body;
        await Product.create({
            name_product,
            type_product,
            spec_product,
            desc_product
        });
        res.redirect('/admin/product');
    },
    viewReport: (req, res) => {
        res.render('admin/report/viewReport');
    },
    viewSerach: (req, res) => {
        res.render('admin/searchsn/viewSearch');
    },

    viewUsers: (req, res) => {
            res.render('admin/users/viewUsers')
    },
    addUsers: (req, res) => {
    },
    editUsers: (req, res) => {
    },
    deleteUsers: (req, res) => {
    }
}