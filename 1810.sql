/*
Navicat MySQL Data Transfer

Source Server         : kuokuo
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 1810

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-03-26 18:28:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gouwuche
-- ----------------------------
DROP TABLE IF EXISTS `gouwuche`;
CREATE TABLE `gouwuche` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `images` varchar(255) DEFAULT '',
  `jiage` varchar(255) DEFAULT NULL,
  `qty` varchar(255) DEFAULT NULL,
  `jieshao` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `suoyin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gouwuche
-- ----------------------------
INSERT INTO `gouwuche` VALUES ('87', 'https://haitao.nosdn2.127.net/13f128e96a394be2a6c278b88d6a5b3e1539930817581jnfn1rct10145.jpg?imageView', '256', '1', 'Beats X 蓝牙无线入耳式运动耳机 手机耳机带麦可通话', '13736781345', '4');

-- ----------------------------
-- Table structure for lanjiazai
-- ----------------------------
DROP TABLE IF EXISTS `lanjiazai`;
CREATE TABLE `lanjiazai` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `images` varchar(255) DEFAULT NULL,
  `jieshao` varchar(255) DEFAULT NULL,
  `jiage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lanjiazai
-- ----------------------------
INSERT INTO `lanjiazai` VALUES ('1', 'https://haitao.nos.netease.com/b9ad16c05d454abaaa49a7ffa3568f0f1506051618628j7vc8y7e10032.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'BANZ婴幼儿防噪音耳塞降噪音耳罩降低噪音保护耳膜 适于0岁+', '666');
INSERT INTO `lanjiazai` VALUES ('2', 'https://haitao.nosdn2.127.net/1bf4eiucv24_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'SAINT LAURENT PARIS 圣罗兰 反转巴黎女士香水 50毫升', '777');
INSERT INTO `lanjiazai` VALUES ('3', 'https://haitao.nos.netease.com/4cf23bf691a144fbb0bc3acf08c162ee1544424668511jphykkzs10237.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'SK-II 2018年圣诞限定KARAN波普艺术神仙水套装 红蓝紫三色选', '123');
INSERT INTO `lanjiazai` VALUES ('4', 'https://haitao.nosdn2.127.net/13f128e96a394be2a6c278b88d6a5b3e1539930817581jnfn1rct10145.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Beats X 蓝牙无线入耳式运动耳机 手机耳机带麦可通话', '256');
INSERT INTO `lanjiazai` VALUES ('5', 'https://haitao.nos.netease.com/5a75693ddc824258937923783564c8691521093227734jes3mu2e11250.jpg?imageView&thumbnail=305x305&quality=95&type=webp', '【闺蜜分享装】DHC 蝶翠诗 纯榄润唇膏1.5克 * 4', '567');
INSERT INTO `lanjiazai` VALUES ('6', 'https://haitao.nosdn2.127.net/1bgo40fk047_800_800.jpg?imageView&thumbnail=305x305&quality=95&type=webp', 'POLA 宝丽 B.A卸妆乳霜 130克 双重抗糖化', '66');
INSERT INTO `lanjiazai` VALUES ('7', 'https://haitao.nosdn1.127.net/yzKTOMD0IboeLrxain1dhevz55_400_400T1807061653_400_400.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '由法国时装设计师克里斯汀•迪奥（Christian Dior）于1946年创于巴黎', '123');
INSERT INTO `lanjiazai` VALUES ('8', 'https://haitao.nosdn2.127.net/68061b07e39a40dabac06d967af07cc11512985060705jb208ocl18397.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Montagne jeunesse 黑醋栗蓝莓活肤剥离式面膜 6毫升+', '67');
INSERT INTO `lanjiazai` VALUES ('9', 'https://haitao.nosdn2.127.net/1bmvontsb59_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【关晓彤同款】Nature Republic自然共和国芦荟胶 300ml/盒', '77');
INSERT INTO `lanjiazai` VALUES ('10', 'https://haitao.nosdn2.127.net/1bju9m8ll21_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【润而不腻 强力保湿】LOSHI 北海道马油面霜 220g 加强保湿 妆前打底', '11');
INSERT INTO `lanjiazai` VALUES ('11', 'https://haitao.nosdn2.127.net/d0862ee51b3748b892c87794f62c264f1530690798910jj6ts3e111355.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '英国AA网 控油去痘印收毛孔茶树精油 10毫升', '45');
INSERT INTO `lanjiazai` VALUES ('12', 'https://haitao.nosdn1.127.net/5f5e41d7fd9144a6b6fdf559d708b2601538200359073jmn0s13j10583.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Avène 雅漾 舒护活泉水喷雾 50毫升 精巧旅行装 补水保湿 舒缓滋润', '10');
INSERT INTO `lanjiazai` VALUES ('13', 'https://haitao.nosdn1.127.net/d87bb6abcd60404b8cc12253abf5b8f11538295902352jmolnuqu10341.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Beats Studio3 Wireless 录音师无线3代 头戴式 蓝牙无线降噪耳机 游戏耳机', '236');
INSERT INTO `lanjiazai` VALUES ('14', 'https://haitao.nosdn1.127.net/1ch52a9me2_800_800.jpg?imageView&thumbnail=262x262&quality=90', 'Beats Solo3 Wireless 无线头戴式耳机 支持国内保修', '677');
INSERT INTO `lanjiazai` VALUES ('15', 'https://haitao.nosdn1.127.net/ecb2b00d31524d4aa4cfbef1548c88ed1541575962324jo6uix7x10344.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【意大利高端厨具】TVS提薇司维特系列法式薄饼平底锅不粘煎锅25厘米', '11');
INSERT INTO `lanjiazai` VALUES ('16', 'https://haitao.nosdn1.127.net/1ckgtvq2578_800_800.jpg?imageView&thumbnail=262x262&quality=90', 'SWAROVSKI施华洛世奇 项链女经典天鹅系列锁骨链配饰礼物送女友', '8');
INSERT INTO `lanjiazai` VALUES ('17', '//pop.nosdn.127.net/b45bd2db-3755-4d97-8195-ffa04ec23e38?imageView&thumbnail=262x262&quality=90', 'Christopher Bailey珂芮柏蒂 个性时尚甜美镂空太阳花圆圈手链手镯女玫瑰金手链女手镯', '77');
INSERT INTO `lanjiazai` VALUES ('18', 'https://pop.nosdn.127.net/4e37457a-bc05-4567-9d70-d5915ac1f47e?imageView&thumbnail=243x243&quality=95&type=webp', 'Remax/睿量 T20蓝牙耳机运动无线蓝牙头戴挂耳式无耳塞式开车专用骨传导不入耳无痛苹果小米手机超 T20 挂耳', '898');
INSERT INTO `lanjiazai` VALUES ('19', 'https://haitao.nosdn1.127.net/8911c5353a7d455da77cadcff3b4ba551550025256222js2l0m4b11011.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'MARSHALL Acton 二代 马歇尔摇滚重低音HiFi监听级蓝牙音箱', '656');
INSERT INTO `lanjiazai` VALUES ('20', 'https://pop.nosdn.127.net/b19e3c02-aa3a-4a8f-8fc8-bd6ad1938e5d?imageView&thumbnail=243x243&quality=95&type=webp', 'BRAUN 博朗电动剃须刀7系 7898cc男士充电往复式电动刮胡刀 带智能清洁桶', '56');
INSERT INTO `lanjiazai` VALUES ('21', 'https://haitao.nosdn2.127.net/58bfe25dad8f4028a9e9e48093737a5f1539937457566jnfr02ve10388.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【两件85折】考拉工厂店 车载无线快充充电器支架', '76');
INSERT INTO `lanjiazai` VALUES ('22', 'https://haitao.nosdn2.127.net/ijlec7ef37_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'BRAUN 博朗 HD785 负离子热能感应吹风机 智能温控 家用大功率冷热风（集风嘴*1+大风罩*1）', '353');
INSERT INTO `lanjiazai` VALUES ('23', 'https://haitao.nosdn1.127.net/9d7fadd0aa614ee68279bd4ecefeeb061527069454242jhixq3ru12693.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【春季防过敏】考拉工厂店 强力除螨吸尘器  PC10', '333');
INSERT INTO `lanjiazai` VALUES ('24', 'https://haitao.nosdn2.127.net/f0cf93e1e8584acdb80f5128f0fb40e21536584110281jlwai7cm11652.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【青春有你同款】考拉工厂店 智能超声波大容量加湿器', '212');
INSERT INTO `lanjiazai` VALUES ('25', 'https://haitao.nosdn2.127.net/1biqhes2l56_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Marshall马歇尔 Stanmore摇滚重低音监听级无线蓝牙音箱', '777');
INSERT INTO `lanjiazai` VALUES ('26', 'https://haitao.nosdn2.127.net/j0dueciy81_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Beats by dr. dre Pill+ 便携式蓝牙无线音响 支持国内保修', '898');
INSERT INTO `lanjiazai` VALUES ('27', 'https://haitao.nosdn1.127.net/9d10197c978d4963b03c5c620b6cd2831514529022737jbrjh52x13302.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'FUJIFILM 富士 INSTAX MINI90 一次成像相机拍立得国内保修', '999');
INSERT INTO `lanjiazai` VALUES ('28', 'https://haitao.nosdn2.127.net/iwoqhzo570_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Beats EP 头戴式耳机 含线控麦克风 支持国内保修', '898');
INSERT INTO `lanjiazai` VALUES ('29', 'https://haitao.nosdn1.127.net/8913154a73fc4eb7a7d7b3de2901faa21528178391110ji19yh4f14052.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '小米（MI）小米手环3 心率监测 智能提醒 睡眠监测 计步', '666');
INSERT INTO `lanjiazai` VALUES ('30', '//haitao.nos.netease.com/1bpfols4u72_800_800.jpg?imageView&thumbnail=800x0&quality=85', '【便携 私人按摩师】BEURER博雅 便携式电动迷你按摩仪 颈部肩部腿部按摩仪MG16 红色', '0.99');

-- ----------------------------
-- Table structure for liebiaoye
-- ----------------------------
DROP TABLE IF EXISTS `liebiaoye`;
CREATE TABLE `liebiaoye` (
  `id` int(6) NOT NULL,
  `images` varchar(255) DEFAULT NULL,
  `jieshao` varchar(255) DEFAULT NULL,
  `jiage` int(6) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of liebiaoye
-- ----------------------------
INSERT INTO `liebiaoye` VALUES ('2', 'https://haitao.nosdn2.127.net/1bf4eiucv24_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'SAINT LAURENT PARIS 圣罗兰 反转巴黎女士香水 50毫升', '777', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('1', 'https://haitao.nos.netease.com/b9ad16c05d454abaaa49a7ffa3568f0f1506051618628j7vc8y7e10032.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'BANZ婴幼儿防噪音耳塞降噪音耳罩降低噪音保护耳膜 适于0岁+', '666', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('3', 'https://haitao.nos.netease.com/4cf23bf691a144fbb0bc3acf08c162ee1544424668511jphykkzs10237.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'SK-II 2018年圣诞限定KARAN波普艺术神仙水套装 红蓝紫三色选', '123', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('4', 'https://haitao.nosdn2.127.net/13f128e96a394be2a6c278b88d6a5b3e1539930817581jnfn1rct10145.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Beats X 蓝牙无线入耳式运动耳机 手机耳机带麦可通话', '256', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('5', 'https://haitao.nos.netease.com/5a75693ddc824258937923783564c8691521093227734jes3mu2e11250.jpg?imageView&thumbnail=305x305&quality=95&type=webp', '【闺蜜分享装】DHC 蝶翠诗 纯榄润唇膏1.5克 * 4', '567', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('6', 'https://haitao.nosdn2.127.net/1bgo40fk047_800_800.jpg?imageView&thumbnail=305x305&quality=95&type=webp', 'POLA 宝丽 B.A卸妆乳霜 130克 双重抗糖化', '66', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('7', 'https://haitao.nosdn1.127.net/yzKTOMD0IboeLrxain1dhevz55_400_400T1807061653_400_400.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '由法国时装设计师克里斯汀•迪奥（Christian Dior）于1946年创于巴黎', '123', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('8', 'https://haitao.nosdn2.127.net/68061b07e39a40dabac06d967af07cc11512985060705jb208ocl18397.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Montagne jeunesse 黑醋栗蓝莓活肤剥离式面膜 6毫升+', '67', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('9', 'https://haitao.nosdn2.127.net/1bmvontsb59_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【关晓彤同款】Nature Republic自然共和国芦荟胶 300ml/盒', '77', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('10', 'https://haitao.nosdn2.127.net/1bju9m8ll21_800_800.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【润而不腻 强力保湿】LOSHI 北海道马油面霜 220g 加强保湿 妆前打底', '11', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('11', 'https://haitao.nosdn2.127.net/d0862ee51b3748b892c87794f62c264f1530690798910jj6ts3e111355.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '英国AA网 控油去痘印收毛孔茶树精油 10毫升', '45', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('12', 'https://haitao.nosdn1.127.net/5f5e41d7fd9144a6b6fdf559d708b2601538200359073jmn0s13j10583.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Avène 雅漾 舒护活泉水喷雾 50毫升 精巧旅行装 补水保湿 舒缓滋润', '10', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('13', 'https://haitao.nosdn1.127.net/d87bb6abcd60404b8cc12253abf5b8f11538295902352jmolnuqu10341.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'Beats Studio3 Wireless 录音师无线3代 头戴式 蓝牙无线降噪耳机 游戏耳机', '236', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('14', 'https://haitao.nosdn1.127.net/1ch52a9me2_800_800.jpg?imageView&thumbnail=262x262&quality=90', 'Beats Solo3 Wireless 无线头戴式耳机 支持国内保修', '677', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('16', 'https://pop.nosdn.127.net/b4368dcf-8257-46b7-9ac8-e456653eb19f?imageView&thumbnail=243x243&quality=95&type=webp', '【60支新疆长绒棉】水星家纺 60S新疆长绒棉四件套纯棉全棉床单被套 醉出色 床上用品', '66', '../img/liebiaoyetu3.png');
INSERT INTO `liebiaoye` VALUES ('15', 'https://haitao.nosdn1.127.net/ecb2b00d31524d4aa4cfbef1548c88ed1541575962324jo6uix7x10344.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【意大利高端厨具】TVS提薇司维特系列法式薄饼平底锅不粘煎锅25厘米', '11', '../img/liebiaoyetu3.png');

-- ----------------------------
-- Table structure for yonghu
-- ----------------------------
DROP TABLE IF EXISTS `yonghu`;
CREATE TABLE `yonghu` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `mima` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=167 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yonghu
-- ----------------------------
INSERT INTO `yonghu` VALUES ('1', '17777777777', '111111');
INSERT INTO `yonghu` VALUES ('159', '3', '3');
INSERT INTO `yonghu` VALUES ('160', '15737354734', '123456');
INSERT INTO `yonghu` VALUES ('161', '15737354734', '123456');
INSERT INTO `yonghu` VALUES ('162', '15677777777', '123456');
INSERT INTO `yonghu` VALUES ('163', '15677777774', '123456');
INSERT INTO `yonghu` VALUES ('164', '13333333333', '123456');
INSERT INTO `yonghu` VALUES ('165', '13333333337', '123456');
INSERT INTO `yonghu` VALUES ('166', '13736781345', '123456');
SET FOREIGN_KEY_CHECKS=1;
