let db = {
    users:[
        {
        userId :'dh12ggjh',
        email:"",
        handle:"",
        createdAt:"",
        imageUrl:"",
        bio:"",
        website:"",
        location:""
    }
],
    scream: [
        {
            userHandle: 'user',
            body: 'This the scream body',
            createdAt: "2019-03-15T11:46:01.018Z",
            likeCount: 5,
            commentCount: 2
        }
    ],
    comment:[
         {
             body:"",
             screamId:"",
             userHandle:"",
             createdAt:""
         }
    ],
    notifications:[
        {
            recipient:"",
            sender:"",
            read:"",
            screamId:"",
            type:"",
            createdAt:""
        }
    ]
};


//Redux data
const userDetails = {
    credentials:{
        userId:"",
        email:"",
        handle:"",
        createdAt:"",
        imageUrl:"",
        bio:"",
        website:"",
        location:""
    },
    likes:[
        {
            userHandle:"",
            screamId:""
        },
        {
            userHandle:"",
            screamId:""
        }
    ]
}