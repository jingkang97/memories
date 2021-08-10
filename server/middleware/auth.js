// checks if user log in can do all the different things like edit, like, delete
import jwt from "jsonwebtoken";

// wants to like a post
// click the like button => auth middleware (NEXT) => like controller ... 

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // is our own auth, if more than 500 is google auth
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            // test - secret - inside controller/user.js
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        }else{
            // google's case
            decodedData = jwt.decode(token)
            // sub - google id that differentiates every single user
            req.userId = decodeData?.sub
        }
        // next is important - next action, do sth next
        next();

    } catch (error) {
        console.log(error)
    }
}

export default auth