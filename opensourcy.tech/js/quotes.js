var app = document.getElementById('quotes');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 50, 
    cursorClassName: 'cursorSize',
    wrapperClassName: 'typestyle'
});

typewriter.typeString('“Technology is a useful servant but a dangerous master.”')
    .pauseFor(1500)
    .deleteAll(-150)
    .typeString('"Any sufficiently advanced technology is indistinguishable from magic."')
    .pauseFor(1500)
    .deleteAll(-150)
    .typeString('“Open source is about collaborating; not competing.”')
    .pauseFor(1500)
    .start();