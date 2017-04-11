function Searcher() {
    var items = $('.index_item');
    var styles = [];
    var text_tags = [];
    var text2 = [];
    var items_length = items.length;

    for (var i = 0; i < items_length; ++i) {
        var span = items.get(i);
        styles.push(span.style);
        text_tags.push($(span).find('.tags').html());
        text2.push("");
    }

    var lastValue = '';

    this.grep = function (str) {
        if (str == lastValue) {
            return;
        } else {
            lastValue = str;
        }

        var regs = [];
        var words = str.split(' ');
        for (var i = 0; i < words.length; ++i) {
            if (words[i] != '') {
                regs.push(new RegExp(words[i].replace(/(\W)/g, "\\$1"), 'i'));
            }
        }

        for (var i = 0; i < items_length; ++i) {
            var span = items[i];
            var matched = true;
            for (var j = 0; j < regs.length; ++j) {
                if (!regs[j].test(text_tags[i]) && !regs[j].test(text2[i])) {
                    matched = false;
                    break;
                }
            }

            styles[i].display = matched ? '' : 'none';
        }
    }
}

var searcher;
function init() {
    searcher = new Searcher();
    setInterval(onTimer, 400);
}

function onTimer() {
    searcher.grep(document.getElementById('grepword').value);
}

window.onload = init;
