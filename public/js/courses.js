const learnMore = document.getElementsByClassName('learn-more');

function learnMoreButton(className)
{
    location.href = className + '.html';
}

for (var i = 0; i < learnMore.length; i++)
{
    learnMore[i].addEventListener('click', (e)=>
    {learnMoreButton(learnMore[i].parentNode.parentNode.id)})
}