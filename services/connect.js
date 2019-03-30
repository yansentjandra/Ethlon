const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('volunteers');

name= "Andy";
language = "Mandarin";
status = "Yes"
contact = "215-235-7682"
url = "https://c-3sux78kvnkay76x24mgskvkjogx2eiax78ykijtx2eius.g00.gamepedia.com/g00/3_c-3rur.mgskvkjog.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fmgskvkjog.iax78ykijt.iusx2frurkyvux78zy_mgskvkjog_ktx2fkx2fk1x2fZYS_Ysuuznok_8675_Yvroz_7.vtmx3fbkx78youtx3d4845k8j52g1g05ii820406i267jlljl0_$/$/$/$/$?i10c.ua=1&i10c.dv=11"

// User.insert({
//   _id: "5c9fbef5128f28a070a6a01e",
//   imageURL: "https://oddslifenetstorage.blob.core.windows.net/esportsinsider/2017/02/Faker.jpg"
// });
new User ({
  volunteerName: name,
  language: language,
  available: status,
  contact: contact,
  imageURL: url,
}).save();

// (id,done) => {

// User.findOne({ userId: id }).then((existingUser) => {
//   if(existingUser) {
//     // We have a record with this id
//     // done(null, existingUser);
//   } else  {
//     // We don't have a record with this id
//     new User({ userId: id }).save()
//       // .then(user => done(null, user));
//     console.log(user);
//   }
// });


// }
// new User({ userId: id }).save();
