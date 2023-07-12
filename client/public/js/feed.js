document.getElementById('portal_button').addEventListener('click', (event) => {
    goToLocation('http://my.marist.edu');
})

let feedItem1 = {
    title: 'Travel Baseball',
    body: 'Travel aross the northeast and other states to play',
    linkUrl: 'https://hvselectbaseball.com/15u-merritt-roster/',
    imageUrl: '/images/Hudson Valley Select Baseball.jpeg'
}

let feedItem2 = {
    title: 'Travel team based out of New Windsor, NY',
    body: 'Organization composed of multiple age groups',
    linkUrl: 'https://www.newburghschools.org/',
    imageUrl: '/images/Hudson Valley Select Travel Team.jpeg'
}

let feedItem3 = {
    title: 'PA baseball tournament cancelled due to rain',
    body: 'Tournament rescheduled for another weekend',
    linkUrl: 'https://maplezonesportsinstitute.com/baseball-tournaments/?la-sport=Baseball&la-type=TOURNAMENT&la-hasCustomFilters=true',
    imageUrl: '/images/Baseball.jpeg'
}

var curremtStories = [feedItem1, feedItem2, feedItem3]

window.addEventListener("load", () => {
    for(var i=0; i < currentStories.length; i++){
        displayFeed(currentStories[i]);
    }});

function displayFeed(currentStories){
    let feed = document.getElementById('newsfeed');
    feed.innerHTML += "<spam><img class='myImage' src ='"+ currentStories.imageUrl +"'>" +"</spam>";
    feed.innerHTML += "<spam><h2><a href='" + currentStories.linkUrl + "'> " + currentStories.Title + "</a"
    feed.innerHTML += "<p>" + currentStories.Body + "</p>";
    feed.innerHTML += "<hr />"
}