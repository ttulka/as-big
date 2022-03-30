import { toExponential } from './_loader.js';
import { strictEqual } from 'assert';

strictEqual(toExponential('0', 0), '0e+0');
strictEqual(toExponential('-0', 0), '0e+0');
strictEqual(toExponential('0', 1), '0.0e+0');
strictEqual(toExponential('-0', 1), '0.0e+0');
strictEqual(toExponential('0', 2), '0.00e+0');
strictEqual(toExponential('-0', 2), '0.00e+0');
strictEqual(toExponential('1', 0), '1e+0');
strictEqual(toExponential('11', 0), '1e+1');
strictEqual(toExponential('112', 0), '1e+2');
strictEqual(toExponential('112', 2), '1.12e+2');
strictEqual(toExponential('1', 3), '1.000e+0');
strictEqual(toExponential('0.1', 0), '1e-1');
strictEqual(toExponential('0.11', 0), '1e-1');
strictEqual(toExponential('0.112', 0), '1e-1');
strictEqual(toExponential('0.1', 1), '1.0e-1');
strictEqual(toExponential('0.11', 1), '1.1e-1');
strictEqual(toExponential('0.112', 1), '1.1e-1');
strictEqual(toExponential('0.1', 2), '1.00e-1');
strictEqual(toExponential('0.11', 2), '1.10e-1');
strictEqual(toExponential('0.112', 2), '1.12e-1');
strictEqual(toExponential('0.1', 3), '1.000e-1');
strictEqual(toExponential('0.11', 3), '1.100e-1');
strictEqual(toExponential('0.112', 3), '1.120e-1');

strictEqual(toExponential('-0.1', 0), '-1e-1');
strictEqual(toExponential('-0.11', 0), '-1e-1');
strictEqual(toExponential('-0.112', 0), '-1e-1');
strictEqual(toExponential('-0.1', 1), '-1.0e-1');
strictEqual(toExponential('-0.11', 1), '-1.1e-1');
strictEqual(toExponential('-0.112', 1), '-1.1e-1');
strictEqual(toExponential('-0.1', 2), '-1.00e-1');
strictEqual(toExponential('-0.11', 2), '-1.10e-1');
strictEqual(toExponential('-0.112', 2), '-1.12e-1');
strictEqual(toExponential('-0.1', 3), '-1.000e-1');
strictEqual(toExponential('-0.11', 3), '-1.100e-1');
strictEqual(toExponential('-0.112', 3), '-1.120e-1');

strictEqual(toExponential('-0.5', 1), '-5.0e-1');
strictEqual(toExponential('0', 2), '0.00e+0');
strictEqual(toExponential('11.2356', 0), '1e+1');
strictEqual(toExponential('11.2356', 4), '1.1236e+1');
strictEqual(toExponential('0.000112356', 4), '1.1236e-4');
strictEqual(toExponential('-0.000112356', 4), '-1.1236e-4');

strictEqual(toExponential('0.99976', 2), '1.00e+0');
strictEqual(toExponential('99.9979', 2), '1.00e+2');
strictEqual(toExponential('99991.27839', 2), '1.00e+5');
strictEqual(toExponential('99.999', 3), '1.000e+2');
strictEqual(toExponential('9999512.8', 3), '1.000e+7');
strictEqual(toExponential('999702726', 2), '1.00e+9');
strictEqual(toExponential('999.964717', 3), '1.000e+3');

strictEqual(toExponential('-2856376.815219143184897347685012382222462687620998915470135915511363444', 60, 0), '-2.856376815219143184897347685012382222462687620998915470135915e+6');
strictEqual(toExponential('0.000000000000000000000007757', 5, 0), '7.75700e-24');
strictEqual(toExponential('0.7', 1, 0), '7.0e-1');
strictEqual(toExponential('52109749078977455423107465583658126637', 34, 0), '5.2109749078977455423107465583658126e+37');
strictEqual(toExponential('0.00000000000000000000000000003631093819552528994444977110063007461579154042777868294', 57, 0), '3.631093819552528994444977110063007461579154042777868294000e-29');
strictEqual(toExponential('-989393786.042588804219191', 15, 0), '-9.893937860425888e+8');
strictEqual(toExponential('8797804362260746751563912625017414439944006.5804807', 16, 0), '8.7978043622607467e+42');
strictEqual(toExponential('-0.000000465617027643946026213823955447791862428108248596086901464075785390015', 19, 0), '-4.6561702764394602621e-7');
strictEqual(toExponential('-254277048.224290221559692488430240765024783', 33, 0), '-2.542770482242902215596924884302407e+8');
strictEqual(toExponential('0.000000027', 8, 0), '2.70000000e-8');
strictEqual(toExponential('-80291821891769794.408790934252924453237503615825249362166', 37, 0), '-8.0291821891769794408790934252924453237e+16');
strictEqual(toExponential('-0.0000000000000008052959230040573585458547716514262', 26, 0), '-8.05295923004057358545854771e-16');
strictEqual(toExponential('-0.00000000000000000000278675879025858093817787290334306', 6, 0), '-2.786758e-21');
strictEqual(toExponential('-801608356247372258038.538246876417776604065270622886204812876', 43, 0), '-8.0160835624737225803853824687641777660406527e+20');
strictEqual(toExponential('-7284905488799914469461919177.08975892527524', 34, 0), '-7.2849054887999144694619191770897589e+27');
strictEqual(toExponential('-0.00000000000000007586908', 3, 0), '-7.586e-17');
strictEqual(toExponential('-595081509336365806742.496029416739842548642249', 40, 0), '-5.9508150933636580674249602941673984254864e+20');
strictEqual(toExponential('-0.000000000000000003526911897770082481187', 9, 0), '-3.526911897e-18');
strictEqual(toExponential('-0.0000000000000000000005774729035676859', 3, 0), '-5.774e-22');
strictEqual(toExponential('-0.00000000000064700957007714124190210074383', 25, 0), '-6.4700957007714124190210074e-13');
strictEqual(toExponential('-5610492566512449795573', 6, 0), '-5.610492e+21');
strictEqual(toExponential('-601556443593022914280678', 3, 0), '-6.015e+23');
strictEqual(toExponential('-606733615533.448288878', 13, 0), '-6.0673361553344e+11');
strictEqual(toExponential('-315617199368461055533962323.071668327669249', 1, 0), '-3.1e+26');
strictEqual(toExponential('-9139107951210456203234346', 22, 0), '-9.1391079512104562032343e+24');
strictEqual(toExponential('-2044198307917443182711', 4, 0), '-2.0441e+21');
strictEqual(toExponential('-821283723216249535240085.606500821783973097233814324', 44, 0), '-8.21283723216249535240085606500821783973097233e+23');
strictEqual(toExponential('-637540984314799.4', 3, 0), '-6.375e+14');
strictEqual(toExponential('-217797482005219478530856429744.7268928676963181', 32, 0), '-2.17797482005219478530856429744726e+29');
strictEqual(toExponential('-395476721391', 4, 0), '-3.9547e+11');
strictEqual(toExponential('-6892798573971046301111', 4, 0), '-6.8927e+21');
strictEqual(toExponential('-0.000000000006338421414029165389261335065112712777', 20, 0), '-6.33842141402916538926e-12');
strictEqual(toExponential('-0.000000000000000000000000000004572725511159166', 4, 0), '-4.5727e-30');
strictEqual(toExponential('-0.000000000000000078847457779026882221249217577974', 31, 0), '-7.8847457779026882221249217577974e-17');
strictEqual(toExponential('-2649162316402.649271824', 17, 0), '-2.64916231640264927e+12');
strictEqual(toExponential('-17360440496948254515028685124.37795415803082546457797184294', 8, 0), '-1.73604404e+28');
strictEqual(toExponential('-86802249856236148.11694273469092873', 12, 0), '-8.680224985623e+16');
strictEqual(toExponential('-0.00000000000000000043859841576346037715462713764211635', 1, 0), '-4.3e-19');
strictEqual(toExponential('-0.000000000076886753538909815914171710501337139', 26, 0), '-7.68867535389098159141717105e-11');
strictEqual(toExponential('-5243250386110905059283.894223250016067979080420266', 35, 0), '-5.24325038611090505928389422325001606e+21');
strictEqual(toExponential('-0.0000000000000000000013874592057586367688528204069850262406', 2, 0), '-1.38e-21');
strictEqual(toExponential('-7308601949094508589445770.5820741094106150373221910779', 42, 0), '-7.308601949094508589445770582074109410615037e+24');
strictEqual(toExponential('-32638405387645.3309565877781780222317335852159983', 4, 0), '-3.2638e+13');
strictEqual(toExponential('-35545473744809471901929.118320651505996237856336054914', 41, 0), '-3.55454737448094719019291183206515059962378e+22');
strictEqual(toExponential('-0.00000000005390624225279268530907215395611', 13, 0), '-5.3906242252792e-11');
strictEqual(toExponential('-8867608738112131.050787', 20, 0), '-8.86760873811213105078e+15');
strictEqual(toExponential('-0.00000000000000000000004781292548355671480462711435866243551', 14, 0), '-4.78129254835567e-23');
strictEqual(toExponential('-0.00000000000000000064694208834502691835879021438795583630205', 40, 0), '-6.4694208834502691835879021438795583630205e-19');
strictEqual(toExponential('-0.00000000000000000000000093242969', 3, 0), '-9.324e-25');
strictEqual(toExponential('-69222205890764081827.8655148459740694252038421', 21, 0), '-6.922220589076408182786e+19');
strictEqual(toExponential('-41932075461614585862.215078', 15, 0), '-4.193207546161458e+19');
strictEqual(toExponential('-798827417648620333729.80696458197', 2, 0), '-7.98e+20');
strictEqual(toExponential('-0.0000000000000000000000000025361014542495516754818606153', 2, 0), '-2.53e-27');
strictEqual(toExponential('-0.0000000000000000000149306776062013560263804', 13, 0), '-1.4930677606201e-20');
strictEqual(toExponential('-24385708957357294486.03887038886025345320045340124898971786', 13, 0), '-2.4385708957357e+19');
strictEqual(toExponential('-2317065015767252559.781502861084367708776250552', 31, 0), '-2.3170650157672525597815028610843e+18');
strictEqual(toExponential('-6917819884210952360.76327902290237387108459707859893972', 7, 0), '-6.9178198e+18');
strictEqual(toExponential('-0.000000000000000000000005855779377', 7, 0), '-5.8557793e-24');
strictEqual(toExponential('-0.00000000000297608486674725722', 7, 0), '-2.9760848e-12');
strictEqual(toExponential('-599420945654272334215750.2697081334512770109182770472941827', 21, 0), '-5.994209456542723342157e+23');
strictEqual(toExponential('-2176318765141873189550724', 24, 0), '-2.176318765141873189550724e+24');
strictEqual(toExponential('-301506824017276316.76429915833625914624', 36, 0), '-3.015068240172763167642991583362591462e+17');
strictEqual(toExponential('-40923601204594928272133415.465802825885680243307714368088538', 48, 0), '-4.092360120459492827213341546580282588568024330771e+25');
strictEqual(toExponential('-0.00000000000000000000000000012410377364', 9, 0), '-1.241037736e-28');

strictEqual(toExponential('-0.00000000000000000000000000000000000000500223911660588892717870293065633642', 30), '-5.002239116605888927178702930656e-39');
strictEqual(toExponential('-852292947230244775434968241532.494643593912804433318745222587246680109833509655450267792446', 20), '-8.52292947230244775435e+29');
strictEqual(toExponential('-61169514510.8673382', 13), '-6.1169514510867e+10');
strictEqual(toExponential('-8057457635273076761707597221751692660178316952146', 47), '-8.05745763527307676170759722175169266017831695215e+48');
strictEqual(toExponential('-49235721020.9847017846898652687600227388412980598816', 12), '-4.923572102098e+10');
strictEqual(toExponential('-798134166171502711774690607651594491039629', 33), '-7.981341661715027117746906076515945e+41');
strictEqual(toExponential('-0.008', 2), '-8.00e-3');
strictEqual(toExponential('0.000000000000008517466793430899278197016892', 39), '8.517466793430899278197016892000000000000e-15');
strictEqual(toExponential('-3.0322935124071923328711934463341802038', 9), '-3.032293512e+0');
strictEqual(toExponential('-0.00000000000000000002606829044034893056789087713239958101382673852', 53), '-2.60682904403489305678908771323995810138267385200000000e-20');
strictEqual(toExponential('-393581692727398036652.850960055902271', 15), '-3.935816927273980e+20');
strictEqual(toExponential('-0.00000000000000000000000000298297216346039288935575576076143', 11), '-2.98297216346e-27');
strictEqual(toExponential('-301319315398414808376087.572306433', 8), '-3.01319315e+23');
strictEqual(toExponential('-0.00000000000887069852692118832284144110732', 15), '-8.870698526921188e-12');
strictEqual(toExponential('-326739927744903524706793.652546266488323001284674736489440831', 2), '-3.27e+23');
strictEqual(toExponential('-8613828413581', 3), '-8.614e+12');
strictEqual(toExponential('-6138244599059.3346026803630253203', 22), '-6.1382445990593346026804e+12');
strictEqual(toExponential('-7911197130975', 7), '-7.9111971e+12');
strictEqual(toExponential('-859021525010507210136559039003.689834129033952321238', 13), '-8.5902152501051e+29');
strictEqual(toExponential('-0.00000000000000000000000000000724490826045045451271534', 5), '-7.24491e-30');
strictEqual(toExponential('-8494807028534919397498922.15049193806567151361656033246', 52), '-8.4948070285349193974989221504919380656715136165603325e+24');
strictEqual(toExponential('-0.00000000000000006329523959626011114164', 10), '-6.3295239596e-17');
strictEqual(toExponential('-3172569235260846783669130724638.711', 10), '-3.1725692353e+30');
strictEqual(toExponential('-406572707673.336570352310681187663765', 9), '-4.065727077e+11');
strictEqual(toExponential('-6828838692499980755.7424722315549682855987375899188309581152', 32), '-6.82883869249998075574247223155497e+18');
strictEqual(toExponential('-2561444004270452149437863.38354535663028539', 26), '-2.56144400427045214943786338e+24');
strictEqual(toExponential('-497637439956044400125498.8682100590602459937304614141772', 26), '-4.97637439956044400125498868e+23');
strictEqual(toExponential('-430789192919870282274653450614.349564081', 30), '-4.307891929198702822746534506143e+29');
strictEqual(toExponential('-0.00000000000000000000000000855367295711812079', 2), '-8.55e-27');
strictEqual(toExponential('-790612526329.410459220189562', 3), '-7.906e+11');
strictEqual(toExponential('-0.00000000000000000000031841363', 7), '-3.1841363e-22');
strictEqual(toExponential('-620680493048450055389.3227069760888437941041', 16), '-6.2068049304845006e+20');
strictEqual(toExponential('-8480947614295114807.320148688', 7), '-8.4809476e+18');
strictEqual(toExponential('-228798857073425585542366.399034916953775', 18), '-2.287988570734255855e+23');
strictEqual(toExponential('-8148647139762925073276.1644862403206980851079', 36), '-8.148647139762925073276164486240320698e+21');
strictEqual(toExponential('-0.0000000000068764313878566475604352570287089535238582267443', 17), '-6.87643138785664756e-12');
strictEqual(toExponential('-3709586618852569033.55141868', 6), '-3.709587e+18');
strictEqual(toExponential('-68086794224433270564431694468.814537646575833889824621540849', 10), '-6.8086794224e+28');
strictEqual(toExponential('-49663010851788946007', 12), '-4.966301085179e+19');
strictEqual(toExponential('-534439184068052811184219234.494113670484623394', 32), '-5.34439184068052811184219234494114e+26');
strictEqual(toExponential('-27987324119455299', 9), '-2.798732412e+16');
strictEqual(toExponential('-1554430791885961.956863404519493346081223', 18), '-1.554430791885961957e+15');
strictEqual(toExponential('-6906190838220750039778836.289105048686876596', 20), '-6.90619083822075003978e+24');
strictEqual(toExponential('-1108034176809.7705783154', 21), '-1.108034176809770578315e+12');
strictEqual(toExponential('-14266566332440117777110.63461224926682073525873105', 2), '-1.43e+22');
strictEqual(toExponential('-91477543307040.916791223', 2), '-9.15e+13');
strictEqual(toExponential('-110010856476508992391958436.9355559264588205214557001854', 4), '-1.1001e+26');
strictEqual(toExponential('-12148027447349021', 1), '-1.2e+16');
strictEqual(toExponential('-44268551660889.40880208546489742632181832780494', 1), '-4.4e+13');
strictEqual(toExponential('-86205892033855548408.169086865949596390775', 23), '-8.62058920338555484081691e+19');
strictEqual(toExponential('-0.00000000000051876025261394172', 1), '-5.2e-13');
strictEqual(toExponential('-0.0000000000488063953404884862027221562057786242658496407473', 47), '-4.88063953404884862027221562057786242658496407473e-11');
strictEqual(toExponential('-5254530327311322805.9528217', 3), '-5.255e+18');
strictEqual(toExponential('-0.0000000000646304880039951167486', 16), '-6.4630488003995117e-11');
strictEqual(toExponential('-0.00000000000000000000003152137339126187', 5), '-3.15214e-23');
strictEqual(toExponential('-886563136251.626990531858472111699416852', 8), '-8.86563136e+11');
strictEqual(toExponential('-0.0000000000000008638990742870608', 12), '-8.638990742871e-16');
strictEqual(toExponential('-1578177500205.60815944470062002898187', 26), '-1.57817750020560815944470062e+12');
strictEqual(toExponential('-0.00000000000000000000000000365583845930939004226367940618', 22), '-3.6558384593093900422637e-27');
strictEqual(toExponential('-7540535487033', 1), '-7.5e+12');
strictEqual(toExponential('-67647935206791246567', 16), '-6.7647935206791247e+19');
strictEqual(toExponential('-3020481808624591502749101182536.872936744534671794', 19), '-3.0204818086245915027e+30');
strictEqual(toExponential('-8404986622734.85', 8), '-8.40498662e+12');
strictEqual(toExponential('-0.0000000000000000029441352968942548971', 12), '-2.944135296894e-18');
strictEqual(toExponential('-882609969485.52902617534731', 21), '-8.826099694855290261753e+11');
strictEqual(toExponential('-0.000000000000197175658677349252855292223369', 16), '-1.9717565867734925e-13');
strictEqual(toExponential('-491451975824866130376.722358803861287205044883122152013315', 23), '-4.91451975824866130376722e+20');
strictEqual(toExponential('-511164947156144375', 6), '-5.111649e+17');
strictEqual(toExponential('-949647345867.30987953779868637405061', 15), '-9.496473458673099e+11');
strictEqual(toExponential('-2190330892576476289225', 19), '-2.1903308925764762892e+21');
strictEqual(toExponential('-34759836338593591584288059.755482689269713', 8), '-3.47598363e+25');
strictEqual(toExponential('-0.0000000000000000000000029192144584989753156762701431', 28), '-2.9192144584989753156762701431e-24');
strictEqual(toExponential('-404565179734665035887349.28438424933669843', 31), '-4.0456517973466503588734928438425e+23');
strictEqual(toExponential('-129787154915494490.4150929407633398', 24), '-1.297871549154944904150929e+17');
strictEqual(toExponential('-1456653031690875152.6306667', 16), '-1.4566530316908752e+18');
strictEqual(toExponential('-0.00000000000355210483', 4), '-3.5521e-12');
strictEqual(toExponential('-918383248641103513.07221525161442', 28), '-9.1838324864110351307221525161e+17');
strictEqual(toExponential('-0.00000000000000000000083324563331630414928713133382', 26), '-8.33245633316304149287131334e-22');
strictEqual(toExponential('-4593824606634605.62246404360609461398848910424547985108092894', 42), '-4.593824606634605622464043606094613988489104e+15');
strictEqual(toExponential('-0.0000000000000000000000000523185958604202852', 3), '-5.232e-26');
strictEqual(toExponential('-38319390497954461897251251.444', 16), '-3.8319390497954462e+25');
strictEqual(toExponential('-100157678068191049.9880737167495996037119953003896147', 38), '-1.00157678068191049988073716749599603712e+17');
strictEqual(toExponential('-416997741005968980964.50351741322948635363513285839302', 36), '-4.169977410059689809645035174132294864e+20');
strictEqual(toExponential('-0.0000000000712166015319898927837251265677564651728358', 33), '-7.121660153198989278372512656775647e-11');
strictEqual(toExponential('-79892457054553654862.360375008433039194317394396964358522', 38), '-7.98924570545536548623603750084330391943e+19');

strictEqual(toExponential('-4350270750116411997402439304498892819', 13, 2), '-4.3502707501164e+36');
strictEqual(toExponential('0.0000000000000000000094520280724178734152', 1, 2), '9.5e-21');
strictEqual(toExponential('13963118675055417278567601269341861.725007220074421462599465604772727067224824374190703237660781', 83, 2), '1.39631186750554172785676012693418617250072200744214625994656047727270672248243741907e+34');
strictEqual(toExponential('0.00000000000000000000000005944657036540768164877637239177740419063920648', 7, 2), '5.9446570e-26');
strictEqual(toExponential('0.000000000007', 5, 2), '7.00000e-12');
strictEqual(toExponential('-287060740776209.3950381715', 2, 2), '-2.87e+14');
strictEqual(toExponential('3411740542875509328514044', 18, 2), '3.411740542875509329e+24');
strictEqual(toExponential('-0.000000000000000000000000000062023511273868704611839583', 47, 2), '-6.20235112738687046118395830000000000000000000000e-29');
strictEqual(toExponential('29434913012157027662.686313539671733652865549279174', 44, 2), '2.94349130121570276626863135396717336528655493e+19');
strictEqual(toExponential('0.000000000401255076512828067130306533670644537831678294548', 38, 2), '4.01255076512828067130306533670644537832e-10');
strictEqual(toExponential('-542773064444.317654960431120452254700391693837992', 13, 2), '-5.4277306444432e+11');
strictEqual(toExponential('-4355706886680889557797360814401.536556745674646509159280626', 30, 2), '-4.355706886680889557797360814402e+30');

strictEqual(toExponential('-2.03361945085664524115397653636144859', 24, 3), '-2.033619450856645241153977e+0');
strictEqual(toExponential('112955590.0430616', 3, 3), '1.130e+8');
strictEqual(toExponential('112155590.0430616', 2, 3), '1.13e+8');
strictEqual(toExponential('-21366468193.419876852426155614364269', 34, 3), '-2.1366468193419876852426155614364269e+10');
strictEqual(toExponential('58208661.56595661515205734890860077163', 20, 3), '5.82086615659566151521e+7');
strictEqual(toExponential('9161580.937281742611120838868847823478250167882379624', 22, 3), '9.1615809372817426111209e+6');
strictEqual(toExponential('38.97650690106116419699490320634490920742414', 19, 3), '3.8976506901061164197e+1');
strictEqual(toExponential('9099491.4931570087194607344641722310103895224905', 37, 3), '9.0994914931570087194607344641722310104e+6');
strictEqual(toExponential('605633', 2, 3), '6.06e+5');
strictEqual(toExponential('605133', 2, 3), '6.06e+5');
