// 监听物品的 tooltip 事件
ItemEvents.tooltip(event => {
    event.add('minecraft:enchanted_golden_apple', ["Not equivalent to Industrial Foregoing's Latex", 'Line 2 text would go here'])
    // 为三个物品添加统一的 tooltip
    //event.add(['quark:backpack', 'quark:magnet', 'quark:crate'], 'Added by Quark Oddities')
    // 为所有 ID 以 'refinedstorage:red_' 开头的物品添加 tooltip
    //event.add(/refinedstorage:red_/, 'Can be any color')
    
    // 为 'thermal:latex_bucket' 添加多行 tooltip
    //event.add('thermal:latex_bucket', ["Not equivalent to Industrial Foregoing's Latex", 'Line 2 text would go here'])
    
    // 为 'minecraft:skeleton_skull' 添加动态 tooltip，包含玩家名字
    //event.add('minecraft:skeleton_skull', Text.of('This used to be ').append(Client.player.name).append("'s head"))
  
    // 为 'thermal:latex_bucket' 添加高级 tooltip，显示更多信息
    // event.addAdvanced('thermal:latex_bucket', (item, advanced, text) => {
    //   text.add(0, Text.of('Hello')) // 添加 'Hello' 到第一行，推送物品名称到下一行
    // })
  
    // // 为 'minecraft:beacon' 添加高级 tooltip，展示不同内容，取决于玩家是否按下 Shift 键
    // event.addAdvanced('minecraft:beacon', (item, advanced, text) => {
    //   // 如果没有按下 Shift 键，显示一行提示按 Shift 查看更多信息
    //   if (!event.shift) {
    //     text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    //   } else {
    //     // 如果按下了 Shift 键，显示详细信息
    //     text.add(1, Text.green('Gives positive effects to players in a range').bold(true))
    //     text.add(2, Text.red('Requires a base built out of precious metals or gems to function!'))
    //     text.add(3, [Text.white('Iron, '), Text.aqua('Diamonds, '), Text.gold('Gold '), Text.white('or even '), Text.green('Emeralds '), Text.white('are valid base blocks!')])
    //   }
    // })
  
    // // 检查所有物品，如果按下 Alt 键且物品有 NBT 数据，则显示 NBT 数据
    // event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    //   if (event.alt && item.nbt) {
    //     text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt))) // 格式化并显示 NBT 数据
    //   }
    // })
  
    // // 为玩家头颅 ('minecraft:player_head') 添加高级 tooltip，显示持有者的名字
    // event.addAdvanced('minecraft:player_head', (item, advanced, text) => {
    //   let playerName = item.nbt?.SkullOwner?.Name // 获取玩家头颅的持有者名字
    //   if (playerName) {
    //     text.add(Text.red(`The head of ${playerName}`)) // 在 tooltip 中显示该名字
    //   }
    // })
  })
  