const FileException = require('./FileException');

class InputError extends FileException {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        this.message = 'Terjadi kesalahan dalam melakukan prediksi';
        this.name = 'InputError';
    }
}

module.exports = InputError;
