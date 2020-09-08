module.exports = {
    viewDashboard : (req, res) => {
        res.render('admin/dashboard/viewDashboard');
    },

    viewPengiriman: (req, res) => {
        res.render('admin/pengiriman/viewPengiriman');
    },
    addPengiriman : (req, res) => {
        res.render('admin/pengiriman/addPengiriman');
    }    
}