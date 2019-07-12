let dbconfig=require('../dbconfig/db-connect');
dbconfig.connect(function (error) {
    if (error) {
        console.log("db connection error");
        process.exit(1);
    }
    else {
        console.log("connected successfully");


        dbconfig.get().collection('product').insertMany([{
            imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
            title:'gothic vedio game',
            description:'awesome game',
            prise:'20'
        },{
            imagePath:'https://www.mariowiki.com/images/thumb/2/2b/Marioptds.png/146px-Marioptds.png',
            title:'super mario',
            description:'super game',
            prise:'30'},{
            imagePath:'https://www.sideshow.com/storage/product-images/903471/iron-spider_marvel_silo_sm.png',
            title:'video game',
            description:'htriller game',
            prise:'40'},{
            imagePath:'https://www.target.com.au/medias/static_content/product/images/hero/49/29/A1124929.jpg',
            title:'football game',
            description:'nice game',
            prise:'10'}]);
    }
});
