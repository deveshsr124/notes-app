import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) return res.status(401).send("Access Denied");
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	} catch {
		res.status(400).send("Invalid Token");
	}
};
