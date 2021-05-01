const  HandphoneModel = require('../model/Handphone')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    HandphoneModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil menginput penjualan Handphone'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal menginput penjualan Handphone'
    }))
})

exports.showAllData = () =>
new Promise((resolve, reject) =>{
    HandphoneModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil menampilkan semua data penjualan Handphone',
                data : result
            })
        }).catch(() => reject({
            status : false,
            pesan : 'Gagal menampilkan semua data penjualan Handphone',
            data : []
        }))
})

exports.showDataById = (id) =>
new Promise((resolve, reject) =>{
    HandphoneModel.findOne({
        _id: objectId(id)
    }).then(result =>{
        resolve({
            status : true,
            pesan : 'Berhasil menampilkan semua id penjualan Handphone',
            data : result
        })  
    }).catch(() => reject({
        status : false,
        pesan : 'Gagal menampilkan semua id penjualan Handphone',
        data : null
    }))
})

exports.update = (id, data) =>
new Promise((resolve, reject) =>{
    HandphoneModel.updateOne({
        _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil mengubah data penjualan Handphone'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal mengubah data penjualan Handphone'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) =>{
    HandphoneModel.deleteOne({
        _id : objectId(id)
    }).then(() => resolve({
        status: true,
        pesan: 'Berhasil menghapus data penjualan Handphone'
    })).catch(() =>({
        status: false,
        pesan: 'Gagal Menghapus data penjualan Handphone'
    }))
})
