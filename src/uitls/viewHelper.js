export function resizeView(dwidth, dheight) {
    const xs = window.innerWidth / dwidth;
    const ys = window.innerHeight / dheight;
    document.body.style.width = dwidth + 'px';
    document.body.style.height = dheight + 'px';
    document.body.style.transformOrigin = '0 0';
    document.body.style.transform = 'scale(' + xs + ',' + ys + ')';
    window.addEventListener('resize', () => {
        const xs = window.innerWidth / dwidth;
        const ys = window.innerHeight / dheight;
        document.body.style.transform = 'scale(' + xs + ',' + ys + ')';
    });
}