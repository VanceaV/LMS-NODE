var db = require('./db');

exports.getAllAuthors = function(cb){
    db.query("select * from tbl_author", (err,result,fields)=> {
        cb(err, result,fields);
      });
};



exports.addAuthor = function(author, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('insert into tbl_author (author_name) values (?)',author.authorName, function(err, res){
        if(err){
          db.rollback(function(err, res){
            cb(err, res);
          });
        } 
        db.commit(function(err, res){
          cb(err, res);
        });
      });
    });
};

exports.updateAuthor = function(author, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('update tbl_author set author_name=? where author_id=?',[author.authorName,author.authorId], function(err, res){
        if(err){
          db.rollback(function(err, res){
            cb(err, res);
          });
        } 
        db.commit(function(err, res){
          cb(err, res);
        });
      });
    });
};


exports.removeAuthor = function(authorId, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('delete from tbl_author where author_id = ?', [authorId], function(err, res){
        if(err){
          db.rollback(function(err, res){
            cb(err, res);
          });
        } 
        db.commit(function(err, res){
          cb(err, res);
        });
      });
    });
  }


