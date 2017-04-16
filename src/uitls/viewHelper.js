const scaleFactor = {
    xFactor: 1,
    yFactor:1
}
export { scaleFactor };

export function resizeView(dwidth, dheight) {
    const xs=scaleFactor.xFactor = window.innerWidth / dwidth;
    const ys =scaleFactor.yFactor= window.innerHeight / dheight;
    document.body.style.width =dwidth + 'px';
    document.body.style.height = dheight + 'px';
    document.body.style.transformOrigin = '0 0';
    document.body.style.transform = 'scale(' + xs + ',' + ys + ')';
    window.addEventListener('resize', () => {
        const xs =scaleFactor.xFactor= window.innerWidth / dwidth;
        const ys = window.innerHeight / dheight;
        document.body.style.transform = 'scale(' + xs + ',' + ys + ')';
    });
}