// this is our own created middleware (middleware is also know post save and post create hooks)
// there is four type of middleware in mongoDB
// 1 query
// 2 document
// 3 aggregate
// 4 model

//
// middleware  takes  three parameter (req,res next)

// document middleware>
//  it take method like (save event or create event and  function(next) in pre  and in post it function(doc ,next))
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
// tourSchema.pre('save', function(next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// tourSchema.pre('save', async function(next) {
//   const guidesPromises = this.guides.map(async id => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

// tourSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// tourSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// query Middlewarea
