var mongoose = require("mongoose");
var Critter = mongoose.model('Critter');

module.exports = {

    rootIndex: function(req, res){
        console.log('REQUEST RECIEVED BY ROOTiNDEX');
        var mongooseArr = Critter.find({}, function(err, foundList){
            if (err){
                console.log(err);
            }
            res.render('index.ejs', {errors: [], mongooseArr: foundList});
        })
    },

    newGoosePage: function(req, res){
        res.render("mongooses.ejs", {errors: []});
    },
    
    handlePostNew: function (req, res){
        var goose = new Critter({name: req.body.name, species: req.body.species, notes: req.body.notes});
        goose.save(function (err){
            if (err){
                console.log("PROBLEM: "+err);
                res.render("index.ejs", {errors: ['post problem detected', err]});
            }
            else {
                res.redirect("/");
            }
        })
    },

    showEditPage: function (req, res){
        Critter.findById(req.params.id, function (err, foundCritter){
            if (err){
                console.log(err);
            }
            res.render('edit.ejs', {errors: [err], goose:foundCritter});
        })
    },

    handleEditPost: function (req, res){
        Critter.update({id: req.params.id}, 
                {
                    name: req.body.name,
                    species: req.body.species,
                    notes: req.body.notes
                }, 
                function (err, foundCritter){
                    if (err){
                        print(err);  //see line 8 for why this isnt a typo
                    }
                    res.redirect('/');
                }
        )
    },

    destroyUponRequest: function(req, res){
            Critter.findByIdAndRemove(req.params.id, function (err, removed){
                if (err){
                    print(err);
                }
                print('removed by id: '+req.params.id);
                print("remove called. redirecting now");
                res.redirect('/');
            }
    )}
}