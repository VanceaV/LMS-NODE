var db = require('./db');

exports.getAllBooks = function(cb){
    db.query('select * from tbl_book', function(err, result) {
        cb(err, result);
      });
};

exports.addBook = function(book, cb){
    db.beginTransaction(function(err){
        if(err) cb(err, null);
    
        db.query('insert into tbl_book(title, auth_id, pub_id) values(?,?,?)', [book.title, book.auth_id,book.pub_id], function(err, res){
          // if(err){
          //   db.rollback(function(err, res){
          //     return cb(err, res);
          //   });
          // } 
          db.commit(function(err, res){
            cb(err, res);
          });
        });
      });
};


exports.updateBook = function(book, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('update tbl_book set title=?, auth_id=?, pub_id=? where book_id=?', [book.title, book.auth_id,book.pub_id,book.book_id], function(err, res){
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



exports.removeBook = function(book_id, cb){
    db.beginTransaction(function(err){
        if(err) cb(err, null);
    
        db.query('delete from tbl_book where book_id = ?', [book_id], function(err, res){
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


exports.getAuthorById = function(book_id, cb){
    
  db.query('select * from tbl_book where book_id = ?', [book_id], function(err, result,fields){
    cb(err, result,fields);
  });
}
