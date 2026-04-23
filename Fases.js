export const FASES = [
    // --- FASES ORIGINAIS CORRIGIDAS (1-3) ---
    {
        nome: "Fase 1: Tutorial",
        plataformas: [
            { x: 0, y: 0, z: 0, w: 6, d: 6, cor: 0x555555 },
            { x: 0, y: 0.5, z: -10, w: 4, d: 4, cor: 0x00ff88 },
            { x: 0, y: 1, z: -20, w: 4, d: 4, cor: 0x00ff88 },
            { x: 0, y: 1.5, z: -30, w: 6, d: 6, cor: 0xffd700 }
        ]
    },
    {
        nome: "Fase 2: Zigue-zague",
        plataformas: [
            { x: 0, y: 0, z: 0, w: 5, d: 5, cor: 0x555555 },
            { x: -5, y: 1, z: -8, w: 3, d: 3, cor: 0x00ccff },
            { x: 5, y: 2, z: -16, w: 3, d: 3, cor: 0x00ccff },
            { x: -5, y: 3, z: -24, w: 3, d: 3, cor: 0x00ccff },
            { x: 0, y: 4, z: -35, w: 6, d: 6, cor: 0xffd700 }
        ]
    },
    {
        nome: "Fase 3: Escalada Precisa",
        plataformas: [
            { x: 0, y: 0, z: 0, w: 5, d: 5, cor: 0x555555 },
            { x: 0, y: 2, z: -9, w: 3, d: 3, cor: 0xff5500 },
            { x: 7, y: 4, z: -9, w: 3, d: 3, cor: 0xff5500 },
            { x: 7, y: 6, z: -18, w: 3, d: 3, cor: 0xff5500 },
            { x: 0, y: 8, z: -18, w: 3, d: 3, cor: 0xff5500 },
            { x: 0, y: 9, z: -30, w: 6, d: 6, cor: 0xffd700 }
        ]
    }
];

// --- GERADOR AUTOMÁTICO PARA AS FASES 4 ATÉ 50 ---
for (let i = 4; i <= 50; i++) {
    const dificuldade = i * 2;
    const fase = {
        nome: `Fase ${i}`,
        plataformas: [
            { x: 0, y: 0, z: 0, w: 5, d: 5, cor: 0x555555 } // Início
        ]
    };

    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;

    // Criar 6 plataformas intermediárias por fase
    for (let j = 1; j <= 6; j++) {
        lastX += (Math.random() - 0.5) * 12; // Desvio lateral
        lastY += 0.8; // Sobe um pouco
        lastZ -= 9; // Distância fixa segura para o pulo
        
        fase.plataformas.push({
            x: parseFloat(lastX.toFixed(2)),
            y: parseFloat(lastY.toFixed(2)),
            z: parseFloat(lastZ.toFixed(2)),
            w: Math.max(1.5, 4 - (i * 0.05)), // Blocos diminuem conforme a fase aumenta
            d: Math.max(1.5, 4 - (i * 0.05)),
            cor: `hsl(${(i * 20) % 360}, 70%, 50%)` // Cores mudam por fase
        });
    }

    // Plataforma Final
    fase.plataformas.push({
        x: parseFloat(lastX.toFixed(2)),
        y: lastY + 1,
        z: lastZ - 12,
        w: 6,
        d: 6,
        cor: 0xffd700
    });

    FASES.push(fase);
}