UPGS.sciencelab = {
    unl: ()=>(player.bestGJ>=30||player.fTimes>0)&&player.unnatural,

    title: "Tube Upgrades",

    autoUnl: ()=>hasSolarUpgrade(0,13),
    noSpend: ()=>hasSolarUpgrade(0,13),

    req: ()=>player.grassjump>=30,
    reqDesc: ()=>`Reach 30 Grass-Jump to Unlock.`,

    underDesc: ()=>`You have ${format(player.stardust,0)} Stardust`+gainHTML(player.stardust,tmp.stardustGain,1),
