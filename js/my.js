//主页的表头哪里点击切换的
function toggleDiv(divId) {
    var divs = document.querySelectorAll('.containerCon');
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id === divId) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
}
//第一页那个五个圆
function changeContentOne(div) {
    console.log(div);
    div.innerHTML = "Information about this website";
}

function restoreContentOne(div) {
    div.innerHTML = "1 Basic information";
}
function changeContentTwo(div) {
    div.innerHTML = "Features of this website";
}

function restoreContentTwo(div) {
    div.innerHTML = "2 Function";
}
function changeContentThree(div) {
    div.innerHTML = "The purpose of creating this website";
}

function restoreContentThree(div) {
    div.innerHTML = "3 Aim";
}
function changeContentFour(div) {
    div.innerHTML = "Rules for the use of this website";
}

function restoreContentFour(div) {
    div.innerHTML = "4 Rules";
}
function changeContentFive(div) {
    div.innerHTML = "Inadequacy and reflection";
}

function restoreContentFive(div) {
    div.innerHTML = "5 Advice";
}
//第三页的跳转页面
function redirectToOtherPage() {
    window.location.href = "other.html";
}
//第三页的动画，电击放大
function expandBox(box) {
    box.innerHTML = "Equisetum arvense L.Is a fern of the genusEquisetum in the familyEquisetum.Rhizome is blackbrown;Main branch green,branching,lateral branchessoft slender, flat, The fruit isyellowish-brown.The floweringperiod is from August toSeptember and the fruit periodis from September to October."
        + "International Endangered Level:No Threat (LC)"
        ;
}

function shrinkBox(box) {
    box.innerHTML = "<p>Equisetum arvense L</p>";
}
function expandBox2(box) {
    box.innerHTML = "Pteridium aquilinum (L) is aSpecies of Pteridium in the fernfamily Pteridium, growing up to lm tall.Distribution:lt is mainly found inthe Yangtze River basin and thenorth area,and also in subtropicalareas;lt is also widespread inother tropical and temperateregions of the world.it grows atan altitude of200-830 meters onthe sunny slopes ofmountains andon the edge of forests.Value: The starch extracted fromthe rhizome is called fern powderwhich is edible, the fiber of therhizome can be made into rope, andthe young leaves can be eaten,called bracken;The whole plant isused as medicine,rheumatism,diuretic,antipyretic, and insectrepellent.Protection level: Zhejiang Provincekey protection ofwild plantsEquisetum arvense L.Is a fern of the genusEquisetum in the familyEquisetum.Rhizome is blackbrown;Main branch green,branching,lateral branchessoft slender, flat, The fruit isyellowish-brown.The floweringperiod is from August toSeptember and the fruit periodis from September to October.";
}
function shrinkBox2(box) {
    box.innerHTML = "<p>Pteridium aquilinum L</p>";
}
function expandBox3(box) {
    box.innerHTML = "Ephedra sinicaStapf is aherbaceous shrub of the genusephedra in theephedra family Ephedra is produced in Liaoning,Jilin,Inher MongoliaHebei,Shanxi, northwest Henanand Shaanxi provinces and regions. Value: Ephedra herb can treat thesymptoms of external wind cold,cold aversion,ho sweat,cough,asthma,edemaand oliguria The root has an antiperspirant effect and curesnight sweats. Endangered Level:Near Threatened(NT)";
}
function shrinkBox3(box) {
    box.innerHTML = "<p>Ephedra sinicaStapf is</p>";
}
function expandBox4(box) {
    box.innerHTML = "Ephedra rhytidosperma Pachomis a dwarf shrub belonging tothe ephedra family and ephedragenus. It is nearly cushilike, upto 15 cm tall and up to 3o cmthin. The roots and stems arehighly woody,the nodes arethick and nodular, the greenbranchlets are short,thepSeudowhorls are arrangedradially, the internodes areshort,and the leaves aremembranous and sheathing.Lobes broadly triangular, apexslightly obtuse.Distribution: Low denudatedstony mountains in HelanMountain and adjacent TenggerDesert bordering Ningxia andAlxa LeagueChina.Value: Ephedra maculata is alow forage plant.Protection level: China nationalkey second class protection ofwild plants";
}
function shrinkBox4(box) {
    box.innerHTML = "<p>Ephedra rhytidosperma</p>";
}

function expandBox5(box) {
    box.innerHTML = "Ephedra equisetina Bunge is aSmall upright shrub of thegehus ephedra in theephedraceae family. The plant isup to i m tall, the woody sternis long, erect, and the sparsepart is creeping.Distribution: Equitas ephedra isdistributed in Hebei,ShanxiInher Mongolia, westernShaanxi,Gansu and Xinjiangprovinces and regionS, and alsoin Mongolia and Russia.Value: Equine ephedra taste,bitter, warm, with sweating todispel cold,asthma, water andswelling function, can be uSedfor wind cold cold,bronchitisand other symptoms.Protection status: Nationalsecondary key protection ofwild plants";
}
function shrinkBox5(box) {
    box.innerHTML = "<p>Ephedra equisetina Bunge</p>";
}

function expandBox6(box) {
    box.innerHTML = "Ephedra monosperma J. G.Gmel.ex C A. Mey.Is A Smallherbaceous shrub of the ephedrafamily. The xylem is short.many branches,curved andnodular processes, and the skinis mostly brown red. Greenbranchlets spreading or slightlyspreading,often slightlycurved, short internodesDistribution:widelydistributed, produced in Heilongjiang，Hebei, Shanxi Inner Mongolia,Xinjiang.Qinghai,Ningxia,Gansu.Sichuan and Tibet provinces andregionS. Value: Contains alkaloids formedicinal purposes. Grassstems into medicine. Spicy.slightly bitter, warm. Return tolung, bladder meridian.Sweating and relieving surface,relieving cough and relievingdsthmna, relieving water. It isused for external wind-coldsyndrome,wheezing coughsyndrome, edema and surfacesyhdrome.Protection Status: No Risk (LC)";
}
function shrinkBox6(box) {
    box.innerHTML = "<p>Ephedra monosperma J</p>";
}

function expandBox7(box) {
    box.innerHTML = "Ephedra intermedia Schrenk exMey is a shrub of the genusephedra in the ephedra family.20-l00 cm high; Stem erect orcreeping obliquely, stout, basebranching.Distribution: It is distributed inLiaoning,Hebei, Shandong, InnerMongolia, Shanxi, Shaanxi,GanSu,Qinghai and Xinjiangprovinces and regions, and ismost common in northwesternprovinces and regions.Value: For medicinal purposes.but the alkaloid content is lessthan ephedra equisetum andephedra herb.Succulent bractsare edible, and roots and stemsare often used as fuel in nativeareds.Endangered Level: NearThreatened (NT)";
}
function shrinkBox7(box) {
    box.innerHTML = "<p>Ephedra intermedia</p>";
}

function expandBox8(box) {
    box.innerHTML = "Rhubarb(Rheumfranzenbachii Munt)is a perennial herb ofthe polygonacedefamily.Distribution: ShanxiHebei, southern inherMongolia and hortherh Henan Value: traditiona Chinese medicine for raw or grilled use.The application of Mongolian medicine.Purging heat anddefecating,breakingstagnation by bloodstasis. For hot stoolamenorrhedabdominal pain,dampheat jaundice; Topicaltreatment ofaphthous erosionburning wound.Danger Rating:NoDanger (Lc)";
}
function shrinkBox8(box) {
    box.innerHTML = "<p>Rheumfranzenbachii Munt</p>";
}

function expandBox9(box) {
    box.innerHTML = "Calligonum alaschanicumLosinsk is a shrub belonging tothe Polygonaceae family,witha plant height of up to 3meters. Old branches gray oryellowish gray; The youngbranches are grayish green.Pedicels thin,perianthSegments broad ovate orsubspherical.Achenes longovate, rib pole raised, groovesobvious, Spines are slender,apex branches spreading,interleaved or straight. Itblooms from June to August.Distribution: lt is distributedin western Inner Mongolia andwestern Gansu. it grows onmoving dunes and sand at analtitude of 500-1500 meters.Value: It is an excellent forageshrub in desert area. Its youngbranches are green and tenderwithout thorns. It is a goodforage for camels and sheep.Danger Rating: No Danger (LC)";
}
function shrinkBox9(box) {
    box.innerHTML = "<p>Calligonum alaschanicumLosinsk</p>";
}

function expandBox10(box) {
    box.innerHTML = "Calligonum mongolicum Turcz.(Calligonum mongolicumTurcz)is a shrub of thepolygonacede family, whichcan reach a height of 150 cm.Distribution: It is distributedin central and western InherMongolia, western GanSu andeastern Xinjiang of China. It isalso found in Mongolia It isborn in the accumulation ofcoarse sand in mobile sanddunes, Semi-fixed sand dunes.fixed sand dunes, sandydeserts, and gravel deserts.Value: Jujube japonicum is apioneer plant for windbreakand sand fixation. Thesuccessive fruit-bearingperiod and large number offruits, from April to June, forma special and beautifullandscape in the desert.Danger Rating: No Danger (LC)";
}
function shrinkBox10(box) {
    box.innerHTML = "<p>Calligonum mongolicum</p>";
}

function expandBox11(box) {
    box.innerHTML = "Atraphaxis frutescens (L.K Koch is a shrub of thegenus Polygonum in thePolygonum family， growing up to loo cm talland having manybranches.Trunk stoutwoody branches spreddout.thin bend.no thornsat the top, sheath cylindrical,brown, membranous. transparent,ledves bluegreen to gray-green, leafblade narrowly lanceolate.lanceolate,oroblongDistribution: Distributedin Gansu,Qinghai Ningxia,Inner Mongoliaand Xinjiang,China; It isalso found in Russia, Kazakhstan and Mongolia.Value: Polygonum lignumhas the excellent characteristics of winderosion resistance, sandburying resistance andbarren resistance.its roots are developed, strong water absorptionability,can sprout a largehumber of adventitia roots under sand buryingconditions,and form a dense root network. whichhas a good sand-fixingeffect.";
}
function shrinkBox11(box) {
    box.innerHTML = "<p>Atraphaxis frutescens</p>";
}

function expandBox12(box) {
    box.innerHTML = "Atraphaxis bracteata Losinsk is anupright shrub in the Polygonacedefamily, growing up to 1.5 m tall.Trunk erect and stout, light brown,glabrous,rib much branched;Branches obliquely ascending orobtuse, apical with leaves or flowers.Sheath cylindroid, membranous,leathery, leaf blade oblong orelliptic,margin microwavy.recirculated,glabrous on both sides,petiole glabrous.Distribution: Distributed in InnerMongolia Ningxia, Gansu,Qinghaiand Shaanxi,ChinaIt is also found inMongolia.Value: Polygonum polygonum hasthick and fragrant flowers. It is agood nectar source plant and sand-fixing tree.Danger Rating: No Danger (LC)";
}
function shrinkBox12(box) {
    box.innerHTML = "<p>Atraphaxis bracteata</p>";
}

function expandBox13(box) {
    box.innerHTML = "Fistulae, Chinese medicine name. It isa perennial herb of Polygonacede,50-go cm tall. The roots are thick andtwisted, and the skin is purplish red.Stems erect, single or Severalclumping, unbranched. Taste bitter,astringent,slightly cold.Distribution: Distributed in LiaoningInner Mongolia, Hebei,Shanxi.Shaanxi,Ningxia, Gansu,Xinjiang.Shandong,Jiangsu,Anhui, Zhejiang,Henan,Hubei,Hunan and otherplaces.Value: It has the effect of clearingheat and detoxification, reducingswelling and stopping bleeding. It isoften uSed for dySentery anddiarrhea,lung heat and cough,abscess of scrofula, sores of mouthand tongue, bleeding from blood heatand bleeding of hemorrhoids, snakeand worm bite.";
}
function shrinkBox13(box) {
    box.innerHTML = "<p>Fistulae, Chinese</p>";
}

function expandBox14(box) {
    box.innerHTML = "Haloxylon ammodendron(CA Mey.) Bunge is Ashrub or small tree of thegenus ammodendron inthe amaranthacede family,having gray-white bark and brittlewood. The old branchesare grayish-brown orlight yellowish-brown,often with annularcracks,and the oldbranches are thin andinclined to rise or bend.Distribution: Haloxylonis distributed in horthwestern Ningxia, western Gansu.northerhQinghai，Xinjiang,InnerMongolia and other places in China, as wellas in Central Asia andSiberia of Russia. Value: Resistant to colddrought, salt and alkali.and wind and sand. Haloxoul can not only curb land desertification,improvesoil, restore vegetation, but also protect the Surroundingdesertification grassland.Protection status: national second-classprotected plants";
}
function shrinkBox14(box) {
    box.innerHTML = "<p>Haloxylon ammodendron</p>";
}

function expandBox15(box) {
    box.innerHTML = "Anabasis brevifolia C. A. Mey is ASemi-shrub of the genus Anabasisbrevifolia, growing up to 20 cm tall.The roots are thick, dark brown.Distribution: lt is distributed inwestern Inher Mongolia, Ningxia,western Gansu and Xinjiang of China.It is also found in Mongolia, WesternSiberia and Kazakhstan.Value: short-leaved pseudoequine hasgood palatability, camels are happyto eat all seasonS, horses, cattle,sheep also eat.";
}
function shrinkBox15(box) {
    box.innerHTML = "<p>Anabasis brevifolia C</p>";
}

function expandBox16(box) {
    box.innerHTML = "Gymnocarpos przewalskiiMaximm.The stem skin ofgymnocarpus is dark graythe young branches arebrown red,and the nodesdre swollen.Leafspindulate linear, apex withshort cusp,subsessile;Cyme axillary,bractsbroadly elliptic;Achenesencrusted in calyx; Seedsbrown, oblong;Floweringperiod May - June, fruitperiod July - August.Distribution: lt is producedin Inher Mongolia, Ningxia,Gansu,Qinghai,Xinjiangand other places in China.It is born in dry riverbed,Gobi beach and gravelhillside in desert areas.Value: Bare fruit woodcontains relatively richnutrition,is a good feedfor camelssheep and otheranimals.Protection level: No Danger(IUCN standard)";
}
function shrinkBox16(box) {
    box.innerHTML = "<p>Gymnocarpos przewalski</p>";
}

function expandBox17(box) {
    box.innerHTML = "Pseudostellaria heterophylla(Miq.)Paxalso known as Pseudostellariaheterophylla, is a perennial herb of thegenus Heterophylla in thecaryophyllaceae family, growing 15-20cm tall.Distribution: Distributed in LiaoningHebei, Shandong,Anhui, Jiangsu andother provinces. Like to grow in a warmand humid environment, afraid of hightemperature, growth stops above 3o.value: Using the root as medicine, it hasthe function of tonifying gi and blood,promoting fluid and tonifying spleenand stomach.Danger Rating: No Danger (LC)";
}
function shrinkBox17(box) {
    box.innerHTML = "<p>Pseudostellaria heterophylla</p>";
}

function expandBox18(box) {
    box.innerHTML = "Silver bupleurum, Chinese herbalmedicine name This product is theroot of the caryophyllaceae plant.Harvest in autumnn, remove stems,leaves and roots, wash and dry.Distribution: Distributed inShaanxi, Gansu,Inher Mongolia,Ningxia and other places. Mainlyproduced in Ningxia, InherMongolia,Shaanxi and other places.Value: Function and indications:clearing vacuity heat, eliminatingchancre heat.lt is uSed for Yindeficiency fever, bone steam laborfever. infantile malnutrition fever.";
}
function shrinkBox18(box) {
    box.innerHTML = "<p>Silver bupleurum</p>";
}

function expandBox19(box) {
    box.innerHTML = "Female vegetable,plant height up to 30cm -70 cm,the wholeplant is denselygray short hair.Distribution: Femalecabbage originatedin China, distributedin most provinces ofChina, in Korea,Japan,Mongolia andRussia and otherplaces.Value: It is mainlyuSed to treat thesymptoms ofirregularmenstruation,lowmilk,infantileinfantile chancre.spleen deficiencyedema,furuncle andtoxic swelling.Danger Rating:NoDanger (LC)";
}
function shrinkBox19(box) {
    box.innerHTML = "<p>Female vegetable</p>";
}

function expandBox20(box) {
    box.innerHTML = "Paeonia lactiflora Pall is a perennial herbin the family Paeonia and the genusPaeoniaDistribution: Distributed in China, Korea,Japan,Mongolia and Russia(Siberia):InChina, it is distributed in Jiangsu,Northeast China,North China,Shaanxi andsouthern Gansu,Sichuan,Guizhou,Anhui,Shandong,Zhejiang and other provincesand urban parks. it grows at an altitudeof 480-700 meters in northeast China,and at an altitude of 1oo0-2300 meters inother provinces.Value: Peony is one of the economicplants that can be uSed for medicinalpurpoSes and for orhamehtal purposes.Root medicinal,called 'Paeony,canrelieve pain,Spasmodic, remove bloodstasis,menses;The seeds contain about25% oil and are uSed for making soap andcoatings.Protection Level: No Danger (LC)";
}
function shrinkBox20(box) {
    box.innerHTML = "<p>Paeonia lactiflora</p>";
}

function expandBox21(box) {
    box.innerHTML = "Trollius chinensis Bunge is a perennialherb in the goldenSeal family.Distribution: Golden lotus is mainlyproduced in northeast China and innerMongolia, Hebei, Shanxi and otherregions.Value: Golden lotus has the effect ofreducing swelling, clearing heat anddetoxification, brightening eyesight, andhas curative effect on cold and fever,sore throat, bleeding gumS, swollen gumsand sore gums.Pharmacological aspectscan be anti-tumor,antibacterialinflammation, blood pressure; Dry goldenlotus flower can also do golden lotus teadrinking, treatment of hypertension;However, it is not suitable for long-termuse,and people with cold body and spleenand stomach deficiency can not use it.Danger Rating: No Danger (LC)";
}
function shrinkBox21(box) {
    box.innerHTML = "<p>Trollius chinensis</p>";
}

function expandBox22(box) {
    box.innerHTML = "Trollius ledebouriiRcS Rchb,(Trolliusledebourii Rchb.)is a perennial herbof the goldenseal family.Distribution: It isdistributed inHeilongjiang andhortheastern InherMongolia of Chind.It is also found incastern Siberia dndthe Far East ofRussia Value: Flower usewith golden lotus:treating chronictonsillitis， combined withchrysanthemumand licorice, cantreat acute otitismediaacuteconjunctivitis andother diseases.";
}
function shrinkBox22(box) {
    box.innerHTML = "<p>Trollius ledebouriiRcS</p>";
}

function expandBox23(box) {
    box.innerHTML = "Xingan Cohosh, Chineseherbal medicine narne. Thisproduct is the rhizomes ofthe goldenseal family. Themain functions are: cohoshDistribution: Mainlyproduced in Heilongjiang.Hebei, Shanxi, InherMongolia It is found inmarginal thickets,hiflsideforests, or grdsslands.";
}
function shrinkBox23(box) {
    box.innerHTML = "<p>Xingan Cohosh</p>";
}

function expandBox24(box) {
    box.innerHTML = "Aconitum,ranunculus family.Distribution: Aconite isdistributed in most areas ofChind, perennial mountain grassslope or shrub,aconite is toxic.often processed for medicinalpurposes. Aconitum prefers awarm humid climate.Adaptabilityis very strong, the altitude ofabout 2000 meters can becultivated, not degraded.value: Aconite is poisonous,oftenprocessed for medicinal purposes.";
}
function shrinkBox24(box) {
    box.innerHTML = "<p>Aconitum,ranunculus</p>";
}

function expandBox25(box) {
    box.innerHTML = "Aconitum yinschanicum Y Z.Zhao is a genus of aconitum.ranunculaceae.native tohorthwest China It is an alpinemeadow with an altitude of20oo meters.Distribution: Southerh InherMongolia (Liangcheng andDaqingshan)Danger Rating: No Danger (LC)";
}
function shrinkBox25(box) {
    box.innerHTML = "<p>Aconitum yinschanicum Y</p>";
}

function expandBox26(box) {
    box.innerHTML = "Anemone sylvestrisL. is a perennialherb in thegoldenSeal familygrowing up to 5ocm tall. Distribution: lt isdistributed innorthern Xinjianginher Mongolia.northern Hebei.western Liaoning.western Jilin. western and northern HeilongjiangEurope and hortherh Asid. Valley grassy orbirch forest edges. grasslands or sandy slopes.Value: This kind ofwhole herb is used,the taste is pungent,bitter. thesex is hot, has theeffect of breakingup,eating.discharging puS.remnoving rot.killing insects.";
}
function shrinkBox26(box) {
    box.innerHTML = "<p>Anemone sylvestrisL</p>";
}

function expandBox27(box) {
    box.innerHTML = "Pulsatilla chinensis (Bunge) Regel),aperennial herb of the genus Pulsatilla,ranunculacede, having rhizomes,ovateleaves,and blue-purple calyx. Nicknamesare helpless grass, pink milkweed,whitehead grass, old aunt grass and so01 Distribution: Distributed in China's Jilin,Liaoning. Hebei, Shandong,Henan,Shanxi, Shaanxi, Heilongjiang and otherprovinces of the mountains, barreh slopesand fields.value: It has the effect of clearing heatand detoxifying, cooling blood andstopping dysentery, drying damphess andkilling insects, and has high medicinalvalue. Iit can be naturally planted ingarden5, Used to arrange flower beds, onboth sides of roads, or dotted in forestcledrings";
}
function shrinkBox27(box) {
    box.innerHTML = "<p>Pulsatilla chinensis</p>";
}

function expandBox28(box) {
    box.innerHTML = "Clematis fruticosaTurcz is a small erectshrub of the genusClematis in thegoldenseal family.The branches areribbed and purplishbrowh. Distribution:Distributed in Gansu,Shaanxi.Shanxi Hebei and Inner Mongolia, China. lt isfound on hillsides oralong roadsides.value: The shrub clematis flowers arebeautiful.the fruitshape is strange,canbe used for flowerborder and rockerygreening. It can beuSed as a groundcover plant in thegardeh and is a goodmaterial forprotecting the cityand fixing the soil.";
}
function shrinkBox28(box) {
    box.innerHTML = "<p>Clematis fruticosaTurcz</p>";
}

function expandBox29(box) {
    box.innerHTML = "Berberis caroli Schneider is adeciduous shrub of the genusBerberis in the Berberacede family.growing up to 2 m tall.Distribution: It is distributed inHohhot.Baotou,Ikchao LedgueBayanndoer League and AlashanLedgue in ChinaValue: Berberis Erdos can be used asan orndmental plant,clusterplanting into flower hedge and othergarden landscape. In the growingperiod, the branches and feaves ofbarberry in Ordos are dense, which isan excellent green material for thecentral isolation belt of the road,and can also be used under streettrees,or isolated plants or clustersplanted in garden green space.";
}
function shrinkBox29(box) {
    box.innerHTML = "<p>Berberis caroli</p>";
}

function expandBox30(box) {
    box.innerHTML = "Pugionium cornutum (l.) Gdertn.) isan annual or biennial herb of thegenus Corhutum in the cruciferousfamily, reaching a height of loo cm.The roots are fleshy, and the stemsare erect and branched.Distribution: Distributed in InnerMongolia,Shaanxi,Ningxia,Gansudnd northeast China desert areds,grassland sandy land.value: The roots and stems ofThaliana are full of nutrients, richin amino acids, and high in content.it is a natural health food used inmedicine and food.Danger Rating: No Danger (Lc)";
}
function shrinkBox30(box) {
    box.innerHTML = "<p>Pugionium cornutum</p>";
}

function expandBox31(box) {
    box.innerHTML = "Pugionium calcaratumKom It is an annualherbaceous psarnmnosaplant of the genusBrassicde,borh in desert or semi-desertdreds of mobile orsemi-mobile sanddunes, used in theSame way as mustard.Distribution: Mabileor semi-mobile dunesin desert or semi- desert areds. Producedin Gansu (Linze),Ningxia (Zhongwei)East Alashan,WestAlashan and otherstates,It is alsofound in MongoliaProtection level:Shaanxi provincialkey protection of wildplants";
}
function shrinkBox31(box) {
    box.innerHTML = "<p>Pugionium calcaratumKom</p>";
}

function expandBox32(box) {
    box.innerHTML = "Prunus mongolica Maxim. Is a plumplant in the rose family.Distribution: Produced in InnerMongolia, Gansu,Ningxia, China,also distributed in Mongolia it isborn in the low mountain hillydesert and desert grassland, stonyslope and dry riverbed at analtitude of 1oo0~2400 meters.value: It has developed roots,drought tolerance, cold tolerance.thin tumor tolerance, and largeamount of flowers, red color, is agood windproof sand fixation andornamental greening tree species.Protection level: National keysecond-class protected wild plants";
}
function shrinkBox32(box) {
    box.innerHTML = "<p>Prunus mongolica</p>";
}

function expandBox33(box) {
    box.innerHTML = "Pedunculus amygdalis, also knownds potato seed and mountaincherry, is a unique tree species inthe Mongolian plateau, and a goodSoil and water conServation treespecies in the mountainous andsandy areas of arid and semi-aridareds in western ChinaDistribution: Stipe almond isdistributed in Inner Mongolia,Ningxia, in foreign countries,Mongolia also hds.value: Goats are particularly fondof its leaves,shoots,flowers andfruits, which are used as shrubfodder for mountain sheep insummer and fall.It can also be usedfor soil and water conServation oras a biological fence.";
}
function shrinkBox33(box) {
    box.innerHTML = "<p>Pedunculus amygdalis</p>";
}

function expandBox34(box) {
    box.innerHTML = "Sophoraalopecuroidesit is a leguminouSwoody,subshrubbyplant of the genusmatrine, up to I mtall. Distribution: lt isdistributed in inherMongoliaShanxi.Shaanxi，NingxiaGansu,Qinghai, Xinjiang,Henan andTibet. It is also found in Russia Afghanistan,Iran,Turkey, Pakistan andnorthern india Value: Bitter beanhas strong droughtresistance and alkaline resistance.fast growth, and isoften cultivated onboth sides of theYellow River to fixsoil sand; Some aredsof Gansu are used formedicinal purposes.";
}
function shrinkBox34(box) {
    box.innerHTML = "<p>Sophoraalopecuroidesit</p>";
}

function expandBox35(box) {
    box.innerHTML = "Sophora flavescens,Chinesemedicine name. it is the dried rootof the leguminous plant matrine,picked in spring and autumn,removed the root head and smnallbranch roots, washed and dried,or sliced and dried when fresh. Itsbitter, cold.value: It has the function ofclearing heat and dryingdampness, killing inSects anddiuresis. It is used for hotdysentery, blood in stool,icterouria, red and white band,swollen and itchy Yin, eczema,wet sores, skin pruritus, scabiesand leprosy,external treatmentof trichomoniasis vaginitis.";
}
function shrinkBox35(box) {
    box.innerHTML = "<p>Sophora flavescens</p>";
}

function expandBox36(box) {
    box.innerHTML = "Chesniella mongolica (Maxim. PC. Li is a perennial herb in thefamily legumne. Stems tufted,slender, supine,15-25 cm long.densely covered with white,voluminous pubescent hairs.Distribution: Inner MongoliaDanger Rating: No Danger (Lc)";
}
function shrinkBox36(box) {
    box.innerHTML = "<p>Chesniella mongolica</p>";
}

function expandBox37(box) {
    box.innerHTML = "Astragalus membraniculus is a kind oftraditional Chinese medicine,which hasthe functions ofinvigorating qi andraising Yang, benefiting Wei andstrengthening surface, detumescenceand swelling, supporting sores andpromoting muscle, etc., with highmedicinal value, it has been planted andcultivated in a large drea in China. Distribution: Distributed in northeastChina.North China and NorthwestChina; It is cultivated all over thecountry. The former Soviet Union has adistribution.It is found at the edge of forests, inthickets or under sparse forests, butaso in hillside grasslands or meddows.";
}
function shrinkBox37(box) {
    box.innerHTML = "<p>Astragalus membraniculus</p>";
}

function expandBox38(box) {
    box.innerHTML = "AstragalusmongholicusThe dried root of aleguminous plantsuch as Astragalusastragalus.Distribution:Produced in InnerMongolia,Heilongjiang,Hebei,Shanxi,ChinaValue: Used forsuperficialastheniaand self-hidrosis.";
}
function shrinkBox38(box) {
    box.innerHTML = "<p>AstragalusmongholicusThe</p>";
}

function expandBox39(box) {
    box.innerHTML = "Hedysarum alpinum L.It is a perennial herb of legumes andAstragalus genus. The root is astraight root system, and thetaproot is deep and strong.Distribution: Distributed in Gansu,Hebei, Heilongjiang,Henan, Jilin,Inher Mongolia,Shaanxi, ShanxiSichuan,Xinjiang, China; It is alsofound in Russia, northern Mongolia,northern Korea,and North America.Value: Cattle, horses and sheep liketo eat the stems and leaves of RadixAstragali before flowering; Aftersummer and autumn, palatabilitydeclines and sheep feed.Danger Rating:No Danger (Lc)";
}
function shrinkBox39(box) {
    box.innerHTML = "<p>Hedysarum alpinum</p>";
}

function expandBox40(box) {
    box.innerHTML = "Astragaus complanatusIt is a tall perennial herbof the leguminous family,all covered with shortstiff hair; Stems tufted,slightly flattened, oftenlying flat,up to l m ormore long, with whitehairs.Distribution:Astragalusflatus is distributed inJilin, Liaoning,Hebei,Shanxi,Inner Mongolia,Shaanxi，Ningxia,Gansuand other provinces inChina lt is drought, coldand saline-alkali tolerant.lt is mostly born inalkaline meadow,mountainsunny slope,shrubland andfield in grassland zone.Value: Astragalus sinensisseeds can be used asmedicinal materials.";
}
function shrinkBox40(box) {
    box.innerHTML = "<p>Astragaus complanatusIt</p>";
}

function expandBox41(box) {
    box.innerHTML = "Astragalus alaschanus Bunge exMaxim.Astragalus mongolicus, a variety ofAstragalus, is a perennial herb, stems are mostly thin, oftencreeping, 8 - 20 cm long, and iscovered with white short volvosThe flowering period was 6 months.no mature pods were seen.Value: Astragalus not only candilate coronary artery, improvemyocardial blood supply, improveimmune function, but also candelay the process of cell agingAstragalus is easy to eat, and canbe decocted in soup, decocted pastesoaked in wine, and put into dishes.Danger Rating:No Danger(LC)";
}
function shrinkBox41(box) {
    box.innerHTML = "<p>Astragalus</p>";
}

function expandBox42(box) {
    box.innerHTML = "Astragalus alaschanus Bunge exMaxim.Astragalus mongolicus,a varietyof Astragalus,is a perennial herb.Value: Astragalus not only candilate coronary artery, improvemyocardial blood supply,improveimmune function,but also candelay the process of cell aging.Danger Rating:No Danger (LC)";
}
function shrinkBox42(box) {
    box.innerHTML = "<p>Astragalus alaschanus</p>";
}

function expandBox43(box) {
    box.innerHTML = "0xytropisneimonggolica C.WChang & Y z. Zhao is aSmall perennial herbofthe genus0xytropis.Itis bornin the grasslands,sandy slopes and rockcrevices at an altitudeof1000-2200 meters.";
}
function shrinkBox43(box) {
    box.innerHTML = "<p>0xytropisneimonggolica</p>";
}


function expandBox44(box) {
    box.innerHTML = "Ephedra intermedia Schrenk exMey is a shrub of the genusephedra in the ephedra family.20-l00 cm high; Stem erect orcreeping obliquely, stout, basebranching.Distribution: It is distributed inLiaoning,Hebei, Shandong, InnerMongolia, Shanxi, Shaanxi,GanSu,Qinghai and Xinjiangprovinces and regions, and ismost common in northwesternprovinces and regions.Value: For medicinal purposes.but the alkaloid content is lessthan ephedra equisetum andephedra herb.Succulent bractsare edible, and roots and stemsare often used as fuel in nativeareds.Endangered Level: NearThreatened (NT)";
}
function shrinkBox44(box) {
    box.innerHTML = "<p>Ephedra intermedia</p>";
}

function expandBox45(box) {
    box.innerHTML = "Rhubarb(Rheumfranzenbachii Munt)is a perennial herb ofthe polygonacedefamily.Distribution: ShanxiHebei, southern inherMongolia and hortherh Henan Value: traditiona Chinese medicine for raw or grilled use.The application of Mongolian medicine.Purging heat anddefecating,breakingstagnation by bloodstasis. For hot stoolamenorrhedabdominal pain,dampheat jaundice; Topicaltreatment ofaphthous erosionburning wound.Danger Rating:NoDanger (Lc)";
}
function shrinkBox45(box) {
    box.innerHTML = "<p>Rheumfranzenbachii Munt</p>";
}

function expandBox46(box) {
    box.innerHTML = "Calligonum alaschanicumLosinsk is a shrub belonging tothe Polygonaceae family,witha plant height of up to 3meters. Old branches gray oryellowish gray; The youngbranches are grayish green.Pedicels thin,perianthSegments broad ovate orsubspherical.Achenes longovate, rib pole raised, groovesobvious, Spines are slender,apex branches spreading,interleaved or straight. Itblooms from June to August.Distribution: lt is distributedin western Inner Mongolia andwestern Gansu. it grows onmoving dunes and sand at analtitude of 500-1500 meters.Value: It is an excellent forageshrub in desert area. Its youngbranches are green and tenderwithout thorns. It is a goodforage for camels and sheep.Danger Rating: No Danger (LC)";
}
function shrinkBox46(box) {
    box.innerHTML = "<p>Calligonum alaschanicumLosinsk</p>";
}

function expandBox47(box) {
    box.innerHTML = "Calligonum mongolicum Turcz.(Calligonum mongolicumTurcz)is a shrub of thepolygonacede family, whichcan reach a height of 150 cm.Distribution: It is distributedin central and western InherMongolia, western GanSu andeastern Xinjiang of China. It isalso found in Mongolia It isborn in the accumulation ofcoarse sand in mobile sanddunes, Semi-fixed sand dunes.fixed sand dunes, sandydeserts, and gravel deserts.Value: Jujube japonicum is apioneer plant for windbreakand sand fixation. Thesuccessive fruit-bearingperiod and large number offruits, from April to June, forma special and beautifullandscape in the desert.Danger Rating: No Danger (LC)";
}
function shrinkBox47(box) {
    box.innerHTML = "<p>Calligonum mongolicum</p>";
}

function expandBox48(box) {
    box.innerHTML = "Atraphaxis frutescens (L.K Koch is a shrub of thegenus Polygonum in thePolygonum family， growing up to loo cm talland having manybranches.Trunk stoutwoody branches spreddout.thin bend.no thornsat the top, sheath cylindrical,brown, membranous. transparent,ledves bluegreen to gray-green, leafblade narrowly lanceolate.lanceolate,oroblongDistribution: Distributedin Gansu,Qinghai Ningxia,Inner Mongoliaand Xinjiang,China; It isalso found in Russia, Kazakhstan and Mongolia.Value: Polygonum lignumhas the excellent characteristics of winderosion resistance, sandburying resistance andbarren resistance.its roots are developed, strong water absorptionability,can sprout a largehumber of adventitia roots under sand buryingconditions,and form a dense root network. whichhas a good sand-fixingeffect.";
}
function shrinkBox48(box) {
    box.innerHTML = "<p>Atraphaxis frutescens</p>";
}

function expandBox49(box) {
    box.innerHTML = "Atraphaxis bracteata Losinsk is anupright shrub in the Polygonacedefamily, growing up to 1.5 m tall.Trunk erect and stout, light brown,glabrous,rib much branched;Branches obliquely ascending orobtuse, apical with leaves or flowers.Sheath cylindroid, membranous,leathery, leaf blade oblong orelliptic,margin microwavy.recirculated,glabrous on both sides,petiole glabrous.Distribution: Distributed in InnerMongolia Ningxia, Gansu,Qinghaiand Shaanxi,ChinaIt is also found inMongolia.Value: Polygonum polygonum hasthick and fragrant flowers. It is agood nectar source plant and sand-fixing tree.Danger Rating: No Danger (LC)";
}
function shrinkBox49(box) {
    box.innerHTML = "<p>Atraphaxis bracteata</p>";
}

function expandBox50(box) {
    box.innerHTML = "Fistulae, Chinese medicine name. It isa perennial herb of Polygonacede,50-go cm tall. The roots are thick andtwisted, and the skin is purplish red.Stems erect, single or Severalclumping, unbranched. Taste bitter,astringent,slightly cold.Distribution: Distributed in LiaoningInner Mongolia, Hebei,Shanxi.Shaanxi,Ningxia, Gansu,Xinjiang.Shandong,Jiangsu,Anhui, Zhejiang,Henan,Hubei,Hunan and otherplaces.Value: It has the effect of clearingheat and detoxification, reducingswelling and stopping bleeding. It isoften uSed for dySentery anddiarrhea,lung heat and cough,abscess of scrofula, sores of mouthand tongue, bleeding from blood heatand bleeding of hemorrhoids, snakeand worm bite.";
}
function shrinkBox50(box) {
    box.innerHTML = "<p>Fistulae, Chinese</p>";
}

function clickSign() {
    window.location.href = "signIn.html";
}