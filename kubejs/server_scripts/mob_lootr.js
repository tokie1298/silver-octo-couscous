


//监听实体战利品
ServerEvents.entityLootTables(event => {
    // 覆盖僵尸掉落物
    event.addEntity("zombie", Loot => {
        
        //普通掉落物
        Loot.addPool(pool => {
            // 添加腐肉
            pool.addItem('minecraft:rotten_flesh').weight(20).count([1, 5])
            // 添加人类油脂
            pool.addItem('bke:ren_lei_you_zhi').weight(16).count([0, 3])
            // 添加肉枝
            pool.addItem('bke:rouzhi').weight(10).count([1, 2])
           
        });
  
        //高级掉落物
        Loot.addPool(pool => {
            // 添加骨头
            pool.addItem('minecraft:bone').weight(20).count([0, 3])
            // 添加破布服装
            pool.addItem('bke:pobufuzhuang').weight(15).count([0, 1])
            // 添加青骨(杀手附魔)
            pool.addItem('bke:qinggu').weight(10).count([0, 2])
            // 添加心脏(杀手3附魔)
            pool.addItem('bke:diershenjizhiwu').weight(8).count([0, 1])
            // 添加内脏(杀手附魔)
            pool.addItem('bke:neizhang').weight(8).count([0, 1])
            // 添加灰色砂矿团(抢夺附魔)
            pool.addItem('bke:hui_se_sha_kuang_tuan').weight(5).count([0, 3])
            // 添加银色砂矿团(抢夺附魔)
            pool.addItem('bke:yin_se_sha_kuang_tuan').weight(5).count([0, 3])
            // 添加旧铜币(抢夺2附魔)
            pool.addItem('bke:jiu_feng_tong_sheng_tong_bi').weight(1).count([0, 3])
            // 添加旧银币(抢夺2附魔)
            pool.addItem('bke:jiu_feng_tong_sheng_yin_bi').weight(1).count([0, 1])

        });
        

    });



    // 覆盖骷髅掉落物
    event.addEntity("minecraft:skeleton", Loot => {
        
        //普通掉落物
        Loot.addPool(pool => {
            // 添加骨头
            pool.addItem('minecraft:bone').weight(20).count([1, 5])
            // 添加骨粉
            pool.addItem('minecraft:bone_meal').weight(16).count([0, 3])
            // 添加骨料
            pool.addItem('bke:gupian').weight(10).count([1, 2])
           
        });
  
        //高级掉落物
        Loot.addPool(pool => {
            // 添加青骨
            pool.addItem('bke:qinggu').weight(20).count([0, 3])
            // 添加龙骨(杀手附魔)
            pool.addItem('bke:longgu').weight(15).count([0, 3])
            // 添加刃骨(杀手3附魔)
            pool.addItem('bke:rengu').weight(10).count([0, 2])
            // 添加灰色砂矿团(抢夺附魔)
            pool.addItem('bke:hui_se_sha_kuang_tuan').weight(5).count([0, 3])
            // 添加银色砂矿团(抢夺附魔)
            pool.addItem('bke:yin_se_sha_kuang_tuan').weight(5).count([0, 3])
            // 添加旧铜币(抢夺2附魔)
            pool.addItem('bke:jiu_feng_tong_sheng_tong_bi').weight(1).count([0, 3])
            // 添加旧银币(抢夺2附魔)
            pool.addItem('bke:jiu_feng_tong_sheng_yin_bi').weight(1).count([0, 1])

        });
        

    });


    // 覆盖苦力怕掉落物
    event.addEntity("minecraft:creeper", Loot => {
        
        //普通掉落物
        Loot.addPool(pool => {
            // 添加火药
            pool.addItem('minecraft:gunpowder').weight(20).count([1, 5])
            // 添加人类油脂
            pool.addItem('bke:ren_lei_you_zhi').weight(16).count([0, 3])
            // 添加木棍
            pool.addItem('minecraft:stick').weight(14).count([1, 2])
           
        });
  
        //高级掉落物
        Loot.addPool(pool => {
            // 添加碳粉
            pool.addItem('bke:tan_fen').weight(20).count([0, 3])
            // 添加萤石粉
            pool.addItem('minecraft:glowstone_dust').weight(15).count([0, 1])
            // 添加青骨(杀手附魔)
            pool.addItem('bke:qinggu').weight(10).count([0, 2])
            // 添加心脏(杀手3附魔)
            pool.addItem('bke:disanshenjizhiwu').weight(8).count([0, 1])
            // 添加内脏(杀手附魔)
            pool.addItem('bke:neizhang').weight(8).count([0, 1])
            // 添加恶魂之泪(杀手附魔)
            pool.addItem('minecraft:ghast_tear').weight(8).count([0, 1])
            // 添加灰色砂矿团(抢夺附魔)
            pool.addItem('bke:hui_se_sha_kuang_tuan').weight(5).count([0, 3])
            // 添加银色砂矿团(抢夺附魔)
            pool.addItem('bke:yin_se_sha_kuang_tuan').weight(5).count([0, 3])
            // 添加旧铜币(抢夺2附魔)
            pool.addItem('bke:jiu_feng_tong_sheng_tong_bi').weight(2).count([0, 3])
            // 添加旧银币(抢夺2附魔)
            pool.addItem('bke:jiu_feng_tong_sheng_yin_bi').weight(2).count([0, 3])
            // 添加旧金币(抢夺2附魔)
            pool.addItem('bke:jiu_feng_tong_sheng_jin_bi').weight(1).count([0, 1])

        });
        

    });

    console.log('自定义掉落物已设置！');
});
