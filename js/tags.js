var updateTags = function(){
    history.replaceState({}, "", "/?sort=latest&verified=true");
    document.querySelector('[title="Marketplace"]').click();
}

updateTags();