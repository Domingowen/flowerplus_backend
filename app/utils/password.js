const bcrypt = require("bcrypt");
const saltRounds = 3;

const encrypt = async password => {
    const salt = await bcrypt.genSaltSync(saltRounds);
    console.log(salt);
    return await bcrypt.hash(password, salt);
};
const validate = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
module.exports = {
    encrypt,
    validate
};
