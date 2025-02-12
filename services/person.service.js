const path = require('path');

class PersonService {
    constructor(basePath) {
        this.basePath = basePath;
    }

    resolveFromFileName(filename) {
        return path.resolve(this.basePath, filename);
    }
}

module.exports = PersonService;