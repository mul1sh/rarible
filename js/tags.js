var updateTags = function(){
    history.replaceState({}, "", "/?sort=latest&verified=true");
    document.querySelector('._1g6qJyApZL1E6iodtNAREf').click();
}

window.addEventListener('load', (event) => {
    updateTags();
});