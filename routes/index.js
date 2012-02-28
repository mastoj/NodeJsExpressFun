
/*
 * GET home page.
 */

var postsModel = {
  title: "Hello",
  posts: (function() {
      function getDummyText(minLength, maxLength) {
        var validChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz ";
        var numberOfChars = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
        var randomstring = '';
        for (var i=0; i<numberOfChars; i++) {
          for(var j = 0; j < Math.random() * 20 && i + j < numberOfChars; j++) {
            var rnum = Math.floor(Math.random() * validChars.length);
            randomstring += validChars.substring(rnum,rnum+1);
            i++;
          }
          randomstring += " ";
          i++;
        }
        return randomstring;
      }
      
      var posts = [];
      for(var i = 0; i < 20; i++)
      {
        var excerpt = getDummyText(50,400);
        var title = "This is title " + i;
        posts[i] = {'title': title, 'excerpt': excerpt, tags: ['tag1', 'tag2']};
      }
      return posts;
    })()
};

exports.index = function(req, res){
  res.render('index', postsModel);
};