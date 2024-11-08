var workspaceIds = [ 36141, 76748, 76749 ];
var randomInteger = new Date().getDate() % 3;

$('iframe').each(function() {
    var src = $(this).attr('src');
    if (src.indexOf(workspaceIds[0]) > -1) {
        src = src.replace(workspaceIds[0], workspaceIds[randomInteger]);
        $(this).attr('src', src);
    }
});

$('img').each(function() {
    var src = $(this).attr('src');
    if (src.indexOf(workspaceIds[0]) > -1) {
        src = src.replace(workspaceIds[0], workspaceIds[randomInteger]);
        $(this).attr('src', src);
    }
});

$('a').each(function() {
    var href = $(this).attr('href');
    if (href && href.indexOf(workspaceIds[0]) > -1) {
        href = href.replace(workspaceIds[0], workspaceIds[randomInteger]);
        $(this).attr('href', href);
    }
});