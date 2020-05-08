USE blogs_db;

INSERT INTO blogs (author, postDate, content)
VALUES ("Kerry","2020-05-06","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique velit distinctio expedita corrupti quibusdam dolorem fugit vitae quos commodi hic, ea vel inventore aliquid nostrum ipsum ipsam architecto nesciunt soluta! Perferendis laboriosam recusandae cupiditate inventore, laudantium blanditiis expedita, itaque veniam, accusantium temporibus soluta rerum facere magnam consequatur nostrum nihil?"),
 ("Musa","2020-05-04","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique velit distinctio expedita corrupti quibusdam dolorem fugit vitae quos commodi hic, ea vel inventore "),
  ("Jimmy","2020-05-03","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique velit distinctio expedita corrupti quibusdam dolorem fugit vitae quos commodi hic, ea vel inventore aliquid nostrum ipsum ipsam architecto nesciunt soluta! Perferendis laboriosam recusandae cupiditate inventore, laudantium blanditiis expedita, itaque veniam, accusantium temporibus soluta rerum facere magnam consequatur nostrum nihilaliquid nostrum ipsum ipsam architecto nesciunt soluta! Perferendis laboriosam recusandae cupiditate inventore, laudantium blanditiis expedita, itaque veniam, accusantium temporibus soluta rerum facere magnam consequatur nostrum nihil?aliquid nostrum ipsum ipsam architecto nesciunt soluta! Perferendis laboriosam recusandae cupiditate inventore, laudantium blanditiis expedita, itaque veniam, accusantium temporibus soluta rerum facere magnam consequatur nostrum nihil??"),
   ("Scott","2020-05-02","Lorem ipsum dolor sit amet consectetur adipisicing elit.");

   INSERT INTO comments (blogId, poster, messages)
   VALUES (1, "Guillermo","laudantium blanditiis expedita, itaque veniam, accusantium temporibus soluta"),
   (2, "Jernice","laudantium blanditiis expedita, itaqueexpedita, itaqueexpedita, itaque veniam, accusantium temporibus soluta"),
   (2, "Manny","laudantium blanditiisandae cupiditate inventore, laudantium blanditiis expedita, itaque veniam, accusantium temporibus soluta rerum facere magnam consequatur nostrum nihilaliquid nostrum ipsum ipsam architecto nesciunt soluta! Perfere expeditaitaque veniam, accusantium temporibus soluta"),
(3, "Obama","laudantium blanditiis expedita, itaque veniam, accusantium temporibus soluta");
 
SELECT * FROM blogs;
SELECT * FROM comments;