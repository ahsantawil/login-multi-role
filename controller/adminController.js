module.exports = {
    viewDashboard : (req, res) => {
        res.render('admin/dashboard/viewDashboard');
    },

    viewPengiriman: (req, res) => {
        res.render('admin/pengiriman/viewPengiriman');
    },
    addPengiriman : (req, res) => {
        res.render('admin/pengiriman/addPengiriman');
    },

    viewAnalisa : (req, res) => {
        res.render('admin/analisa/viewAnalis');
    },

    viewCeksn   : (req, res) => {
        res.render('admin/ceksn/viewCeksn');
    },

    viewConsumers : (req, res) => {
        res.render('admin/consumers/viewConsumers');
    },
    viewFis       : (req, res) => {
        res.render('admin/fis/viewFis');
    },
    viewKlaim     : (req, res) => {
        res.render('admin/klaim/viewKlaim');
    },
    viewDocument  : (req, res) => {
        res.render('admin/klaim/viewDocument');
    },
    addKlaim      : (req, res) => {
        res.render('admin/klaim/addKlaim');
    },
    viewPenggantian : (req, res) => {
        res.render('admin/penggantian/viewPenggantian');
    },
    addPenggantian : (req, res) => {
        res.render('admin/penggantian/addPenggantian');
    },
    viewProduct : (req, res) => {
        res.render('admin/product/viewProduct');
    },
    viewReport  : (req, res) => {
        res.render('admin/report/viewReport');
    },
    viewSerach  : (req, res) => {
        res.render('admin/searchsn/viewSearch');
    },
    viewUsers   : (req, res) => {
        res.render('admin/users/viewUsers');
    }
}