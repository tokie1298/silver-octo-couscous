/* 
 * ServerEvents.recipes(callback) 是一个接受另一个函数作为参数的函数，
 * 这个函数被称为“回调”，它会在服务器处理配方时运行，
 * 这样我们就可以在其中进行自定义修改。
 * 当回调函数运行时，也可以称之为事件“触发”。
*/

// 监听 "recipes" 服务器事件。
ServerEvents.recipes(event => {
    // 你可以将 `event` 替换为任何你喜欢的名字，
    // 只要你在回调中也相应地改变它即可！
    // 这部分是回调函数，位于大括号内。
    // 在这里，你可以修改任意多个配方，
    // 而不需要再次使用 ServerEvents.recipes()。



    //形状
    //
//     event.shaped(
//         Item.of('minecraft:stone', 3), // arg 1: 输出物品，生成 3 个石头
//         [
//           'A B', // arg 2: 配方形状（以字符串形式表示）
//           ' C ', // 每个字符表示一个特定的物品位置
//           'B A'  // A、B、C 代表的物品会根据映射表进行替换
//         ],
//         {
//           A: 'minecraft:andesite',  // A 位置用安山岩（andesite）替代
//           B: 'minecraft:diorite',   // B 位置用闪长岩（diorite）替代
//           C: 'minecraft:granite'    // C 位置用花岗岩（granite）替代
//         }
//       )
    
//     //无形
//     //使用该方法添加无形状的配方。玩家可以将无形配方的原料放在网格上的任何位置，它仍然会制作。参数是：event.shapeless()event.shapeless()
      
//       event.shapeless(
//         Item.of('minecraft:dandelion', 3), // arg 1: 输出物品，生成 3 个蒲公英
//         [
//           'minecraft:bone_meal',        // arg 2: 输入物品之一，骨粉
//           'minecraft:yellow_dye',       // 输入物品之二，黄色染料
//           '3x minecraft:ender_pearl'    // 输入物品之三，3 个末影珍珠
//         ]
//       )
    
//     //锻造
//     //锻造配方有 2 或 3 个输入（取决于 Minecraft 版本，见下文）和一个输出，并使用该方法添加。锻造配方是在锻造台中制作的。event.smithing()
//       event.smithing(
//         'minecraft:netherite_ingot',                     // arg 1: 输出物品，合成 1 个下界合金锭
//         'minecraft:netherite_upgrade_smithing_template', // arg 2: 锻造模板，下界升级锻造模板
//         'minecraft:iron_ingot',                          // arg 3: 被升级的物品，铁锭
//         'minecraft:black_dye'                            // arg 4: 升级物品，黑色染料
//       )
//     //冶炼和烹饪
//     //烹饪食谱都非常相似，接受一个输入（单个项目）并给出一个输出（最多可以有 64 个相同的项目）。在此配方事件中，燃料不能更改，应使用标签来完成。
//     //烧炼配方是用 添加的，并且需要普通的熔炉。event.smelting()
//     //爆破配方由 添加，并且需要高炉。event.blasting()
//     //吸烟食谱添加 ，并且需要 Smoker。event.smoking()
//     //Campfire 烹饪食谱与 相加，并且需要 Campfire。event.campfireCooking()
//     //获得的 XP 是通过附加 来设置的。烹饪时间（以刻度为单位）通过附加 来设置。也可以在 input 和 output 之后指定它们。.xp().cookingTime()  
//     // 在熔炉中将 1 个石头（stone）炼制成 3 个砾石（gravel）
//         event.smelting('3x minecraft:gravel', 'minecraft:stone')
//     // 在爆炸炉中将 1 个铁锭（iron_ingot）炼制成 10 个铁粒（iron_nugget）
//         event.blasting('10x minecraft:iron_nugget', 'minecraft:iron_ingot')
//     // 在烟熏炉中将 1 个玻璃（glass）炼制成 1 个有色玻璃（tinted_glass），并给予 0.35 点经验
//         event.smoking('minecraft:tinted_glass', 'minecraft:glass').xp(0.35)
//     // 在篝火上将 1 根木棍（stick）烧制成 1 根火把（torch），给予 0.35 点经验，并需要 30 秒钟的时间（600 ticks）
//         event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.35, 600)
//     //石材切割
//     //与烹饪食谱一样，切石食谱非常简单，只有一个输入（单个项目）和一个输出（最多可以有 64 个相同的项目）。它们是使用 方法添加的。event.stonecutting()
//     // 允许在石匠台上将任何木板（planks）切割成 3 根木棍（stick）
//         //event.stonecutting('3x minecraft:stick', '#minecraft:planks')
//         //删除配方
//         //可以使用该方法删除配方。它接受 1 个参数：一个 Recipe Filter。过滤器是一组属性，用于确定要选择哪些配方。您可以选择配方的条件有很多：event.remove()
//         //按输出项{output: '<item_id>'}
//         //按输入项{input: '<item_id>'}
//         //由 Mod{mod: '<mod_id>'}
//         //按唯一配方 ID{id: '<recipe_id>'}
//         //上述组合：
//         //需要满足 ALL 条件：{condition1: 'value', condition2: 'value2'}
//         //需要满足以下任何条件：[{condition_a: 'true'}, {condition_b: 'true'}]
//         //要求不满足条件：{not: {condition: 'requirement'}}
//         //以下所有内容都可以照常进入您的配方回调：
//         // 删除所有配方（显然不推荐这样做）：
//         event.remove({})

// // 删除所有输出为石镐（stone_pickaxe）的配方：
//         event.remove({ output: 'minecraft:stone_pickaxe' })

// // 删除所有输出包含“羊毛”标签的配方：
//         event.remove({ output: '#minecraft:wool' })

// // 删除所有输入包含“红石粉”标签的配方：
//         event.remove({ input: '#forge:dusts/redstone' })

// // 删除所有来自 Farmer's Delight（农夫的乐趣）模组的配方：
//         event.remove({ mod: 'farmersdelight' })

// // 删除所有篝火烹饪配方：
//         event.remove({ type: 'minecraft:campfire_cooking' })

// // 删除所有输出为石头的配方，除了熔炼配方：
//         event.remove({ not: { type: 'minecraft:smelting' }, output: 'stone' })

// // 删除所有输出为煮熟鸡肉并且是在篝火上烹饪的配方：
//         event.remove({ output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking' })

// // 删除所有输出为铁锭的爆炸炉（blasting）或熔炉（smelting）配方：
//         event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])

// // 通过 ID 删除配方。例如，删除 data/minecraft/recipes/glowstone.json 配方：
// // 注意：配方 ID 和输出物品是不同的！
//         event.remove({ id: 'minecraft:glowstone' })


event.remove({ output: 'realisticforgingores:blacksmithstongs' })//移除铁匠钳配方
event.remove({ output: 'realisticforgingores:two_sticks' })//移除两根木棍配方
event.remove({ output: 'realisticforgingores:smithing_hammer' })//移除锻造锤配方
event.remove({ output: 'realisticforgingores:smithing_anvil' })//移除锻造铁砧配方
event.remove({ output: 'realisticforgingores:barshapedmold' })//移除条形模具配方
event.remove({ output: 'realisticforgingores:woodpestle' })//移除木杵配方
event.remove({ output: 'realisticforgingores:pan' })//移除锅配方
event.remove({ output: 'realisticforgingores:diamond_sledge_hammerr' })//移除钻石大锤配方
event.remove({ output: 'realisticforgingores:bigpan' })//移除大锅配方
event.remove({ output: 'realisticforgingores:carvinghammer' })//移除宝石雕刻锤配方
event.remove({ output: 'realisticforgingores:chisel' })//移除宝石凿子配方
event.remove({ output: 'minecraft:stonecutter' })//移除切石机配方
event.remove({ output: 'minecraft:grindstone' })//移除砂轮配方
event.remove({ output: 'realisticforgingores:sandpaper' })//移除砂纸配方
event.remove({ output: 'minecraft:leather' })//移除皮革配方
event.remove({ mod: 'magistuarmory' })//移除史诗骑士模组配方
event.remove({ mod: 'slavicarmory' })//移除史诗骑士模组配方
event.remove({ mod: 'swem' })//移除马术模组配方
event.remove({ mod: 'lightmanscurrency' })//移除硬币模组配方
event.remove({ mod: 'wardrobe' })//移除服装背包模组配方
event.remove({ mod: 'believemod' })//移除中世纪装饰模组配方
event.remove({ mod: 'decorative_blocks' })//移除装饰方块模组配方
event.remove({ mod: 'supplementaries' })//移除锦致装饰模组配方
event.remove({ mod: 'comforts' })//移除舒适用品模组配方
event.remove({ mod: 'graveyard' })//移除墓园模组配方
event.remove({ mod: 'epicfight' })//移除史诗战斗模组配方
event.remove({ mod: 'wom' })//移除奇迹武器模组配方
event.remove({ mod: 'handcrafted' })//移除精巧手艺模组配方
event.remove({ mod: 'refm' })//移除刺剑模组配方
event.remove({ mod: 'simplyswords' })//移除简易刀剑模组配方
event.remove({ mod: 'healingflasks' })//移除恢复药水模组配方
event.remove({ mod: 'explorers_companion' })//移除背包模组配方
event.remove({ mod: 'simpleshops' })//移除商店模组配方
event.remove({ mod: 'gildedsherds' })//移除黄金陶片模组配方
event.remove({ mod: 'elegant_countryside' })//移除优雅装饰模组配方
event.remove({ mod: 'drinkbeer' })//移除喝啤酒模组配方
event.remove({ mod: 'antiquelegacy' })//移除史诗骑士：古董遗产模组配方








event.shaped(
    Item.of('realisticforgingores:blacksmithstongs', 1), //铁匠钳配方
    [
    'A B', // arg 2: 配方形状（以字符串形式表示）
    'CD ', // 每个字符表示一个特定的物品位置
    'EFE'  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'magistuarmory:steel_ingot',  
    B: 'magistuarmory:steel_nugget',   
    C: 'bke:chui_zi',
    D: 'bke:liu_ding',
    E: 'minecraft:stick',
    F: 'bke:pi_ge_dai'   
    }
    ).id('bke:tiejiangqian')

event.shapeless(
Item.of('realisticforgingores:two_sticks'), //两根木棍配方
[
'2x minecraft:stick'    
]
).id('bke:lianggenmugun')

event.shaped(
    Item.of('realisticforgingores:smithing_hammer'), //锻造锤配方
    [
    'A  ', // arg 2: 配方形状（以字符串形式表示）
    'BC ', // 每个字符表示一个特定的物品位置
    'D  '  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'minecraft:iron_nugget',  
    B: 'bke:chui_zi',   
    C: 'minecraft:iron_ingot',
    D: 'magistuarmory:hilt' 
    }
    ).id('bke:duanzhaocui')

event.shaped(
    Item.of('realisticforgingores:smithing_anvil'), //锻造铁砧配方
    [
    ' A ', // arg 2: 配方形状（以字符串形式表示）
    'BCD', // 每个字符表示一个特定的物品位置
    ' D '  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'bke:tie_ban',  
    B: 'bke:chui_zi',   
    C: 'minecraft:iron_block',
    D: 'minecraft:iron_ingot' 
    }
    ).id('bke:duanzhaotiezhen')

event.shapeless(
Item.of('bke:nai_huo_tao_tu'), //耐火陶土配方
[
'bke:hua_gang_yan_fen',
'bke:tan_fen',
'minecraft:clay_ball'    
]
).id('bke:naihuotaotu')

event.shapeless(
Item.of('bke:nai_huo_zhuan'), //耐火砖配方
[
'2x bke:nai_huo_tao_tu'    
]
).id('bke:naihuozhuan')

event.shapeless(
Item.of('bke:nai_huo_zhuan_diao_ke'), //锭模具陶坯配方
[
'bke:nai_huo_zhuan',
'bke:feng_ren_zhui'   
]
).id('bke:dingmujutaopi')

event.smelting(
    Item.of('realisticforgingores:barshapedmold'),//条形模具配方    
[
'bke:nai_huo_zhuan_diao_ke'   
]
).id('bke:tiaoxingmuju')

event.shaped(
    Item.of('realisticforgingores:woodpestle'), //木杵配方
    [
    ' A ', // arg 2: 配方形状（以字符串形式表示）
    'BC ', // 每个字符表示一个特定的物品位置
    '   '  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'magistuarmory:hilt',  
    B: 'bke:chui_zi',   
    C: '#minecraft:planks' 
    }
    ).id('bke:muchu')

event.shaped(
    Item.of('realisticforgingores:pan'), //铁锅配方
    [
    '   ', // arg 2: 配方形状（以字符串形式表示）
    'A A', // 每个字符表示一个特定的物品位置
    'BC '  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'bke:tie_ban',  
    B: 'bke:chui_zi',   
    C: 'minecraft:iron_ingot'
    }
    ).id('bke:tieguo')

    event.shaped(
    Item.of('realisticforgingores:diamond_sledge_hammerr'), //钻石大锤（秘银大锤）配方
    [
    'A  ', // arg 2: 配方形状（以字符串形式表示）
    'BC ', // 每个字符表示一个特定的物品位置
    'D A'  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'bke:mi_yin_ding',  
    B: 'bke:chui_zi',   
    C: 'bke:mi_yin_li',
    D: 'magistuarmory:hilt'
    }
    ).id('bke:miyindachui')

event.shaped(
    Item.of('realisticforgingores:bigpan'), //大锅配方
    [
    '   ', // arg 2: 配方形状（以字符串形式表示）
    'A A', // 每个字符表示一个特定的物品位置
    'BCC'  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'bke:tie_ban',  
    B: 'bke:chui_zi',   
    C: 'minecraft:iron_ingot'
    }
    ).id('bke:daguo')

event.shaped(
    Item.of('realisticforgingores:carvinghammer'), //宝石雕刻锤配方
    [
    'AB ', // arg 2: 配方形状（以字符串形式表示）
    'CD ', // 每个字符表示一个特定的物品位置
    '   '  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'magistuarmory:steel_nugget',  
    B: 'magistuarmory:steel_ingot',   
    C: 'bke:chui_zi',
    D: 'magistuarmory:hilt'
    }
    ).id('bke:baoshidiaokechui')

event.shaped(
    Item.of('realisticforgingores:chisel'), //宝石凿子配方
    [
    '  A', // arg 2: 配方形状（以字符串形式表示）
    'BC ', // 每个字符表示一个特定的物品位置
    'C  '  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'magistuarmory:steel_nugget',  
    B: 'bke:chui_zi',   
    C: 'magistuarmory:steel_ingot'
    }
    ).id('bke:baoshizaozi')

event.shapeless(
    Item.of('realisticforgingores:sandpaper'), //砂纸配方
    [
        'minecraft:paper',
        'bke:xiao_he_ji',
        'bke:jin_zi_pi_ge',
        'minecraft:prismarine_crystals'    
        ]
        ).id('bke:shazhi')

event.shapeless(
    Item.of('bke:jin_xi_pi_ge'),//浸洗皮革配方    
[
'minecraft:leather',
'minecraft:water_bucket',
'bke:gua_dao'   
]
).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket').replaceIngredient('minecraft:leather', 'bke:dong_wu_you_zhi').id('bke:jinxipige')

event.shaped(
    Item.of('bke:gua_dao'), //刮刀配方
    [
    'AB ', // arg 2: 配方形状（以字符串形式表示）
    'CDE', // 每个字符表示一个特定的物品位置
    ' E '  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'bke:tie_ban',  
    B: 'minecraft:iron_ingot',   
    C: 'bke:chui_zi',
    D: 'bke:liu_ding',
    E: 'minecraft:stick'
    }
    ).id('bke:guadao')

event.shapeless(    
    Item.of('bke:jin_zi_pi_ge'), //鞣制皮革配方
    [   
    'bke:rou_suan_ping', 
    'bke:jin_xi_pi_ge'
    ]
    ).replaceIngredient('bke:rou_suan_ping', 'minecraft:glass_bottle').id('bke:rouzhipige')

event.shapeless(    
    Item.of('bke:xiao_he_ji'), //胶合剂配方
    [   
    'bke:tan_fen',
    'minecraft:beetroot',
    'bke:dong_wu_you_zhi'
    ]
    ).id('bke:jiaoheji')

event.shapeless(    
    Item.of('bke:zha_kuai'), //蜡块配方
    [   
    'bke:dong_wu_you_zhi',
    'minecraft:glow_berries',
    'minecraft:honeycomb'
    ]
    ).id('bke:lakuai')

event.shaped(
    Item.of('magistuarmory:hilt'), //柄配方
    [
    ' A ', // arg 2: 配方形状（以字符串形式表示）
    'BC ', // 每个字符表示一个特定的物品位置
    'DA '  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'bke:pi_ge_dai',  
    B: 'bke:xiao_he_ji',   
    C: 'minecraft:stick',
    D: 'bke:zha_kuai'
    }
    ).id('bke:shoubing')

event.shaped(
    Item.of('3x bke:pi_ge_dai'), //皮革带配方
    [
    '   ', // arg 2: 配方形状（以字符串形式表示）
    'AB ', // 每个字符表示一个特定的物品位置
    '   '  // A、B、C 代表的物品会根据映射表进行替换
    ],
    {
    A: 'minecraft:shears',  
    B: 'bke:jin_zi_pi_ge'
    }
    ).damageIngredient('minecraft:shears', 2).keepIngredient('minecraft:shears').id('bke:pigedai')














    





    


    
  
    console.log('你好！配方事件已触发！')
  })

