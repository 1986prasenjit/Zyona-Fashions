const registerUser = async (req, res) => {
  return res.status(201).json({ message: "User registered successfully" });
};

const loginUser = async (req, res) => {
  return res.status(200).json({ message: "User logged in successfully" });
};

//Route for admin login
const adminLogin = async (req, res) => {
  return res.status(200).json({ message: "Admin logged in successfully" });
};
export { registerUser, loginUser, adminLogin };
