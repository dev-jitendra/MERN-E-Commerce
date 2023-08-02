import bcrypt from "bcrypt";

export const hashPassowrd = 
async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashPassowrd;
  } catch (err) {
    console.log(`${err}`);
  }
};

export const comaparePassword = 
    async (password, hashedPassword) => {
        return bcrypt.compare(password, hashedPassword);
    };
