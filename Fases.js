export const FASES = [];
const TAM_PADRAO = 3; 

for (let i = 1; i <= 50; i++) {
    const fase = {
        nome: `Fase ${i}`,
        plataformas: [{ x: 0, y: 0, z: 0, w: 6, d: 6, cor: 0x555555, lava: false }]
    };

    let lastX = 0, lastY = 0, lastZ = 0;
    const numPlataformas = 6 + Math.floor(i / 5);

    for (let j = 1; j <= numPlataformas; j++) {
        lastX += (Math.random() - 0.5) * 10;
        lastY += 0.4;
        lastZ -= 8.8; // Distância otimizada para o pulo de 10 unidades

        // Lava começa a aparecer a partir da fase 5
        const isLava = i > 5 && Math.random() < (i * 0.006);

        fase.plataformas.push({
            x: parseFloat(lastX.toFixed(2)),
            y: parseFloat(lastY.toFixed(2)),
            z: parseFloat(lastZ.toFixed(2)),
            w: TAM_PADRAO,
            d: TAM_PADRAO,
            cor: isLava ? 0x222222 : 0x00ff88,
            lava: isLava
        });
    }

    // Checkpoint Final (Sempre seguro)
    fase.plataformas.push({
        x: parseFloat(lastX.toFixed(2)),
        y: lastY + 0.5,
        z: lastZ - 9,
        w: 6, d: 6,
        cor: 0xffd700,
        lava: false
    });

    FASES.push(fase);
}