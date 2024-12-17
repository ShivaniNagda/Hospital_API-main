import passport from 'passport';
import { Strategy as JWTStrategy } from 'passport-jwt';
import { ExtractJwt as ExtractJWT } from 'passport-jwt';
import Doctor from '../models/doctor.model.js';


// ****** Passport Authentication ****** //
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secrethospitalkey"
}

passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){
    // ****** Finding Doctor ****** //
    Doctor.findById(jwtPayLoad._id, function(err, user){ 
        if (err){ // ****** Error Handling ****** //
            console.log('Error in finding user from JWT'); 
            return done(err,false);}

        if (user){ // ****** If the user is found ****** //
            console.log("user in jwt Strategy");
            return done(null, user);
        }else{ // ****** If user is not found ****** //
            return done(null, false);
        }
    })

}));

export default passport;
