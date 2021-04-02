const Upload = require('../models/Upload');

module.exports = class OrderService {
    static async create ({ fileName }) {
        
        const upload = await Upload.insert({ fileName });

        await sendToBucket(
            
        )

        return upload;
    }
};