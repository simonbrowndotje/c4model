function openNavigationModal(options) {
    const navigationList = $('#navigationList');
    navigationList.empty();

    if (options.length > 0) {
        options.forEach(function(option) {
            navigationList.append(
                $('<option></option>').val(option.url).html(option.label)
            );
        });

        navigationList.attr('size', Math.min(8, options.length));
        navigationList.val(options[0].url);

        $('#navigationModal').modal('show');
    }
}

function navigate() {
    var url = $('#navigationList').val();
    $('#navigationModal').modal('hide');
    navigateTo(url);
}

function navigateTo(url) {
    if (url.indexOf('#') === 0) {
        window.location = url;
    } else {
        window.open(url);
    }
}

$('#navigationModal').on('shown.bs.modal', function () {
    structurizr.diagram.setKeyboardShortcutsEnabled(false)
    $('#navigationList').focus();
});

$('#navigationList').on('click', function() {
    navigate();
});

$('#navigationList').on('keydown', function(e) {
    const enterKeyCode = 13;

    if (e.which === enterKeyCode) {
        e.preventDefault();
        navigate();
    }
});

$('#navigationModal').on('hidden.bs.modal', function () {
    structurizr.diagram.setKeyboardShortcutsEnabled(true)
});