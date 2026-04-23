export const FASES = [];

const TAM_PADRAO = 3; 

for (let i = 1; i <= 50; i++) {
    const fase = {
        nome: `Fase ${i}`,
        plataformas: [
            { x: 0, y: 0, z: 0, w: 6, d: 6, cor: 0x555555 }
        ]
    };

    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;

    const numPlataformas = 5 + Math.floor(i / 10);

    for (let j = 1; j <= numPlataformas; j++) {
        let sideMove = (Math.random() - 0.5) * 8; 
        lastX += sideMove;
        lastY += 0.5; 
        lastZ -= 8.5; 

        fase.plataformas.push({
            x: parseFloat(lastX.toFixed(2)),
            y: parseFloat(lastY.toFixed(2)),
            z: parseFloat(lastZ.toFixed(2)),
            w: TAM_PADRAO,
            d: TAM_PADRAO,
            cor: i === 50 ? 0xff0000 : 0x00ff88
        });
    }

    fase.plataformas.push({
        x: parseFloat(lastX.toFixed(2)),
        y: lastY + 0.5,
        z: lastZ - 9,
        w: 6,
        d: 6,
        cor: 0xffd700
    });

    FASES.push(fase);
}