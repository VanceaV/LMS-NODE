var db = require('./db');

exports.getAllAuthors = function(cb){
    db.query("select * from tbl_author", (err,result,fields)=> {
        cb(err, result,fields);
      });
};



exports.addAuthor = function(author, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('insert into tbl_author (author_name) values (?)',[author.author_name], function(err, res){
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
  
      db.query('update tbl_author set author_name=? where author_id=?',[author.author_name,author.author_id], function(err, res){
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


exports.removeAuthor = function(author_id, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('delete from tbl_author where author_id = ?', [author_id], function(err, res){
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

  exports.getAuthorById = function(author_id, cb){
    
        db.query('select * from tbl_author where author_id = ?', [author_id], function(err, result,fields){
          cb(err, result,fields);
        });
    }


