

var newReleases =[
    {
        "id":1,
        "title":"Die Hard",
        "rating":9
    },
    {
        "id":2,
        "title":"Bad Boys",
        "rating":7
    },
    {
        "id":3,
        "title":"The Chamber",
        "rating":10
    },
];


var ans = newReleases.filter(function(newReleases){

    return newReleases.rating>8;
}).map(function(newReleases){
    return newReleases.title;
})

console.log(ans);