class FileException extends Error {
    constructor(message, statusCode = 413) {
        super(message);
        this.statusCode = statusCode;
        this.message = 'Payload content length greater than maximum allowed: 1000000';
        this.name = 'FileException';
    }
}

module.exports = FileException;
