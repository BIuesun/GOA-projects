function childContents(elem) {
    if (!elem.hasChildNodes()) {
        console.log("elem has no children");
    } else {
        const children = elem.children;
        for (let i = 0; i < children.length; i++) {
            console.log(children[i].textContent);
        }
    }
}
