const { MessageEmbed } = require("discord.js");
const Scar = '<:Scar:962344067251978250>';
const pistol_ancient_revolver = '<:Revolver_icon:962344137607245824>';
const Quad_launcher_icon = '<:Quad_launcher_icon:962344070456434748>';
const Purple_gold_pump = '<:Purple_gold_pump:962344070464827392>';
const Pump_shotgun = '<:Pump_shotgun:962344070552883311>';
const Proximity_grenade_launcher = '<:Proximity_grenade_launcher:962344070825537606>';
const Pistol_Epic_and_Legendary = '<:Pistol_28Epic_and_Legendary29:962344070590627880>';
const Pistol = '<:Pistol:962344070506741790>';
const Obliterator_icon = '<:Obliterator_icon:962344070464831549>';
const Normal_rpg = '<:Normal_rpg:962344070389329950>';
const New_Scoped_Assault_Rifle = '<:New_Scoped_Assault_Rifle:962344070171222057>';
const New_Revolver = '<:New_Revolver:962344070313816145>';
const New_Hand_Cannon_Icon = '<:New_Hand_Cannon_Icon:962344070133465108>';
const New_Compact_SMG = '<:New_Compact_SMG:962344070414475354>';
const New_AR_icon = '<:New_AR_icon:962344070016020570>';
const Minigun_icon = '<:Minigun_icon:962344070489968730>';
const MachinePistol = '<:MachinePistol:962344069877612575>';
const Lever_Action_Shotgun = '<:Lever_Action_Shotgun:962344069936345158>';
const Lever_Action_Rifle = '<:Lever_ActionRifle:962344069479153675>';
const Legendary_Scoped_AR_icon = '<:Legendary_Scoped_AR_icon:962344070502559784>';
const Legendary_Heavy_AR = '<:Legendary_Heavy_AR:962344069831487498>';
const LegendaryHuntingRifle = '<:LegendaryHuntingRifle:962344069806297159>';
const LegendaryChargeShotgun = '<:LegendaryChargeShotgun:962344071991541790>';
const Jackolauncher_icon = '<:Jackolauncher_icon:962344070485786684>';
const InfantryRifle = '<:InfantryRifle:962344069797924904> ';
const Hunting_Rifle_BR = '<:Hunting_Rifle_BR:962344069906956318>';
const Heavy_assault_rifle_icon = '<:Heavy_assault_rifle_icon:962344069726613544>';
const Heavy_Shotgun = '<:Heavy_Shotgun:962344070544506890>';
const HackSAW_icon = '<:HackSAW_icon:962344070359953438>';
const Guided_Missile = '<:Guided_Missile:962344070481580093>';
const Gray_to_blue_charge_shotgun = '<:Gray_to_blue_charge_shotgun:962344069554655272>';
const Fusil_3F_Pompe_Sp3Fcialis3F_d3FA = '<:Fusil_3F_Pompe_Sp3Fcialis3F_d3FA:962344069529493574>';
const FlintKnockPistolIcon = '<:FlintKnockPistolIcon:962344070372532234>';
const Dual_pistols_icon = '<:Dual_pistols_icon:962344069625966663>';
const Drum_gun_icon = '<:Drum_gun_icon:962344069382688809>';
const DrumShotgun = '<:DrumShotgun:962344070712262736>';
const Dragon_Breath_shotgun = '<:Dragon_Breath_shotgun:962443636199546931>';
const Doublebarreled_shotgun_icon = '<:Doublebarreled_shotgun_icon:962344070418673664>';
const Combatshotgun = '<:Combatshotgun:962344068296355871>';
const Burstsmg = '<:Burstsmg:962344069198131262>';
const FAMAS = '<:Burst_Assault_Rifle_28FAMAS29_28:962344070397710427>';
const Bolt_action_sniper_new = '<:Bolt_action_sniper_new:962344069311365170>';
const Bolt_action_sniper_gray_to_blue = '<:Bolt_action_sniper_gray_to_blue:962344069470756874>';
const BattleRifle = '<:BattleRifle:962344068048887829>';
const Automatic_sniper_icon = '<:Automatic_sniper_icon:962344067860144138>';
const AutomaticSniperRifle = '<:AutomaticSniperRifle:962344067939860550>';
const Aug_icon = '<:Aug_icon:962344067616874566>';
const Tactical_Shotgun = '<:Tactical_Shotgun:962353587181195324>'
const Tacar = '<:Tacar:962353587051200572>'
const Tac_shot_icon = '<:Tac_shot_icon:962353587130892368>'
const Silent_smg_icon = '<:Silent_smg_icon:962353587030208512>'
const Silent_pistol_icon = '<:Silent_pistol_icon:962353586887606362>'
const Silent_assault_rifle_icon = '<:Silent_assault_rifle_icon:962353586887602176>';
const StormScoutSniperRifle = '<:StormScoutSniperRifle:962353586359132300>';
const Snowball_launcher_icon = '<:Snowball_launcher_icon:962353586443018311>';
const Smg_Gun_Chapter_2 = '<:Smg_Gun_Chapter_2:962353587005055017>';
const Six_shooter_pistol_icon = '<:Six_shooter_pistol_icon:962353585931292736>';
const Silent_Sniper_Rifle = '<:Silent_Sniper_Rifle:962353586568826941>';
const Shotgun_ammo = '<:Shotgun_ammo:962353585969066105>';
const Scoped_Revolver = '<:Scoped_Revolver:962353585893556274>';
const Ripper_icon = '<:Ripper_icon:962353585771921408>';
const Stinger_SMG = '<:Stinger_SMG:962450819695915018>';
const Shells = '<:Shells:962455263753932832>';
const Rockets = '<:Rockets:962454655323996260>';
const Medium_Bullets = '<:Medium_Bullets:962455042139508776>';
const Light_Bullets = '<:Light_Bullets:962454964964302908>';
const Heavy_Bullets = '<:Heavy_Bullets:962454756402528336>';
const arrows = '<:arrows:962456080745648138>';
const Crossbow_icon = '<:Crossbow_icon:962456143161081877>';



module.exports.run =  async (bot, message, args) => {
  if (args[1] = false) {
    const guns = new MessageEmbed()
    .setTitle('Affichage des armes')
    .addField('**__Fusil d\'assauts__**',`${Scar} Scar\n\n${New_AR_icon} Assault rifle\n\n${Legendary_Heavy_AR} `)
    .addField()
  } 
  

}

module.exports.config = {
    name: 'guns', // Command Name
    description: '', // Description
    usage: '+guns', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['weapons','armes','gun','arme'], // Aliases 
    bankSpace: 20, // Amount of bank space to give when command is used.
    cooldown: 150 // Command Cooldown
  }