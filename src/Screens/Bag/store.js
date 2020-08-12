const dataAddress = [
    {
        id: 1,
        name: 'John Doe',
        address: 'Jalan Gempol Marga Bhakti RT 02 RW 10 No. 3|Malang|Jawa Timur|Indonesia|65147'
    },
    {
        id: 2,
        name: 'Mana Abdul',
        address: 'Jalan Gempol Marga Bhakti RT 02 RW 10 No. 3|Malang|Jawa Timur|Indonesia|65147'
    }
]
const paymentData = [
    {
        id: 1,
        name: 'Mastercard',
        brandImage: require('../../Assets/Images/Payment/mastercard.png')
    },
    {
        id: 2,
        name: 'Gopay',
        brandImage: require('../../Assets/Images/Payment/gopay.jpg')
    }
]

export default {
    dataAddress,
    paymentData
}