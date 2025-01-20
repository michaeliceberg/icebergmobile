import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../db/schema';

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });
const main = async () => {
	try {
		console.log('Seeding DB');
		await db.delete(schema.cars);
	

		// ADD COURSES
		//
		await db.insert(schema.cars).values([



			{id:1,carNum:'а546мк750',type:'Т',odometer:'489492',driver:'Автаев Аюб Дзамирович',TOprev:'0',TOnext:'0',},
{id:2,carNum:'с603хк190',type:'Т',odometer:'332242',driver:'',TOprev:'0',TOnext:'0',},
{id:3,carNum:'о009ух190',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:4,carNum:'а534нн',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:5,carNum:'е602ст',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:6,carNum:'с285вн790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:7,carNum:'м473ау790',type:'С',odometer:'24568',driver:'',TOprev:'0',TOnext:'0',},
{id:8,carNum:'м549ау790',type:'М',odometer:'49349',driver:'',TOprev:'0',TOnext:'0',},
{id:9,carNum:'е654ас790',type:'Т',odometer:'47422',driver:'',TOprev:'0',TOnext:'0',},
{id:10,carNum:'м609ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:11,carNum:'у003вк790',type:'Т',odometer:'55868',driver:'',TOprev:'0',TOnext:'0',},
{id:12,carNum:'м608ау790',type:'С',odometer:'185138',driver:'Коцоев Марат Витальевич',TOprev:'0',TOnext:'0',},
{id:13,carNum:'х521ау790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:14,carNum:'м467ау790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:15,carNum:'м561ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:16,carNum:'м584ау790',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:17,carNum:'т750вм790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:18,carNum:'т724вм790',type:'М',odometer:'40119',driver:'',TOprev:'0',TOnext:'0',},
{id:19,carNum:'м655ау790',type:'Т',odometer:'34431',driver:'',TOprev:'0',TOnext:'0',},
{id:20,carNum:'с278вн790',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:21,carNum:'м507ау790',type:'М',odometer:'201177',driver:'Елесов Рустам Рамзанович',TOprev:'0',TOnext:'0',},
{id:22,carNum:'с253вн790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:23,carNum:'м612ау790',type:'С',odometer:'0',driver:'Назаров Ш.Н.',TOprev:'0',TOnext:'0',},
{id:24,carNum:'с204вн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:25,carNum:'м412ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:26,carNum:'с301вн790',type:'М',odometer:'218994',driver:'Хушпаров Усман Виситович',TOprev:'0',TOnext:'0',},
{id:27,carNum:'м515ау790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:28,carNum:'с264вн790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:29,carNum:'м644ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:30,carNum:'с306вн790',type:'С',odometer:'181444',driver:'Майрабеков Алхазур Лечиевич',TOprev:'0',TOnext:'0',},
{id:31,carNum:'м600ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:32,carNum:'с308вн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:33,carNum:'м606ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:34,carNum:'с238вн790',type:'С',odometer:'204417',driver:'Карибов Физиули Насраддин Оглы',TOprev:'0',TOnext:'0',},
{id:35,carNum:'с296вн790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:36,carNum:'м509ау790',type:'С',odometer:'32066',driver:'',TOprev:'0',TOnext:'0',},
{id:37,carNum:'м538ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:38,carNum:'м615ау790',type:'М',odometer:'209330',driver:'Хушпаров Апти Сулейманович',TOprev:'0',TOnext:'0',},
{id:39,carNum:'м592ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:40,carNum:'м558ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:41,carNum:'в896ра750',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:42,carNum:'а544мк750',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:43,carNum:'м591ау790',type:'Н',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:44,carNum:'у573ку750',type:'С',odometer:'348817',driver:'',TOprev:'0',TOnext:'0',},
{id:45,carNum:'а540мк750',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:46,carNum:'к423хм190',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:47,carNum:'а426ае750',type:'С',odometer:'504643',driver:'',TOprev:'0',TOnext:'0',},
{id:48,carNum:'е687ас790',type:'С',odometer:'46391',driver:'',TOprev:'0',TOnext:'0',},
{id:49,carNum:'м454ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:50,carNum:'к893уо190',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:51,carNum:'т782вм790',type:'М',odometer:'34443',driver:'',TOprev:'0',TOnext:'0',},
{id:52,carNum:'е438ас790',type:'С',odometer:'35448',driver:'',TOprev:'0',TOnext:'0',},
{id:53,carNum:'а562мк750',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:54,carNum:'а545мк750',type:'М',odometer:'457492',driver:'Керимов Альви Исаевич',TOprev:'0',TOnext:'0',},
{id:55,carNum:'к889уо190',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:56,carNum:'р279ке750',type:'С',odometer:'263599',driver:'',TOprev:'0',TOnext:'0',},
{id:57,carNum:'р280ке750',type:'М',odometer:'305362',driver:'',TOprev:'0',TOnext:'0',},
{id:58,carNum:'р281ке750',type:'С',odometer:'193143',driver:'',TOprev:'0',TOnext:'0',},
{id:59,carNum:'р284ке750',type:'С',odometer:'309326',driver:'',TOprev:'0',TOnext:'0',},
{id:60,carNum:'х169ео790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:61,carNum:'р283ке750',type:'С',odometer:'320547',driver:'',TOprev:'0',TOnext:'0',},
{id:62,carNum:'н026ха790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:63,carNum:'а559мк750',type:'Т',odometer:'475645',driver:'Теминов Марат Рашидович',TOprev:'0',TOnext:'0',},
{id:64,carNum:'с172хн790',type:'С',odometer:'123078',driver:'Чупилов Андрей Юрьевич',TOprev:'0',TOnext:'0',},
{id:65,carNum:'н445хк790',type:'М',odometer:'112310',driver:'Машукаев Саламбек Зелимханович',TOprev:'0',TOnext:'0',},
{id:66,carNum:'н419хк790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:67,carNum:'н439хк790',type:'М',odometer:'134260',driver:'Зорин Алексей Сергеевич',TOprev:'0',TOnext:'0',},
{id:68,carNum:'н456хк790',type:'М',odometer:'102127',driver:'Мальцагов Руслан Вахаевич',TOprev:'0',TOnext:'0',},
{id:69,carNum:'в751вс790',type:'С',odometer:'244510',driver:'Чубкин Александр Алексеевич',TOprev:'0',TOnext:'0',},
{id:70,carNum:'х520ау790',type:'М',odometer:'366726',driver:'Фаградян Манвел Варичович',TOprev:'0',TOnext:'0',},
{id:71,carNum:'в864вс790',type:'С',odometer:'256828',driver:'Магомадов Темирлан Блавдяевич',TOprev:'0',TOnext:'0',},
{id:72,carNum:'м410вт790',type:'Т',odometer:'413568',driver:'Милашенко Владимир Иванович',TOprev:'0',TOnext:'0',},
{id:73,carNum:'в736вс790',type:'М',odometer:'297285',driver:'Магамедхаджиев Рашид Рамазанович',TOprev:'0',TOnext:'0',},
{id:74,carNum:'т002ах790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:75,carNum:'в717вс790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:76,carNum:'м411вт790',type:'М',odometer:'419049',driver:'Петиров Имран Муталипович',TOprev:'0',TOnext:'0',},
{id:77,carNum:'х580ау790',type:'М',odometer:'275689',driver:'Дахаев Абу Саидмухаметович',TOprev:'0',TOnext:'0',},
{id:78,carNum:'е353кт790',type:'С',odometer:'319048',driver:'Узбеков Равиль Фаритович',TOprev:'0',TOnext:'0',},
{id:79,carNum:'в793вс790',type:'М',odometer:'318483',driver:'Алехин Николай Александрович',TOprev:'0',TOnext:'0',},
{id:80,carNum:'м427вт790',type:'Т',odometer:'285193',driver:'Бязров Арсен Назирович',TOprev:'0',TOnext:'0',},
{id:81,carNum:'в818вс790',type:'С',odometer:'366090',driver:'Шахмурзаев Саид Салманович',TOprev:'0',TOnext:'0',},
{id:82,carNum:'в747вс790',type:'С',odometer:'249923',driver:'Махмудов Абу Мухмадович',TOprev:'0',TOnext:'0',},
{id:83,carNum:'м448вт790',type:'С',odometer:'273534',driver:'Баймурзаев Анзор Муратович',TOprev:'0',TOnext:'0',},
{id:84,carNum:'х500ау790',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:85,carNum:'м414вт790',type:'Т',odometer:'355200',driver:'Арсакаев Асламбек Шуддинович',TOprev:'0',TOnext:'0',},
{id:86,carNum:'х517ау790',type:'С',odometer:'256088',driver:'Мухтаров Ахмед Селимсолтаевич',TOprev:'0',TOnext:'0',},
{id:87,carNum:'м335вт790',type:'Т',odometer:'470284',driver:'Ибрагимов Умар Байалиевич',TOprev:'0',TOnext:'0',},
{id:88,carNum:'в821вс790',type:'С',odometer:'221794',driver:'Ахмадов Шайхмагомед Музаевич',TOprev:'0',TOnext:'0',},
{id:89,carNum:'в865вс790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:90,carNum:'в727вс790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:91,carNum:'с054хм790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:92,carNum:'м419вт790',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:93,carNum:'е274хх790',type:'С',odometer:'128976',driver:'Эхаев Апти Виситович',TOprev:'0',TOnext:'0',},
{id:94,carNum:'к118ру790',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:95,carNum:'у273тн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:96,carNum:'в160тн790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:97,carNum:'х831вр790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:98,carNum:'м233хк790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:99,carNum:'у267тн790',type:'Т',odometer:'149293',driver:'Бибулатов Расул Геланиевич',TOprev:'0',TOnext:'0',},
{id:100,carNum:'х781вр790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:101,carNum:'к104ру790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:102,carNum:'х804вр790',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:103,carNum:'к093ру790',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:104,carNum:'у233тн790',type:'М',odometer:'146050',driver:'Ярыгин Виктор Михайлович',TOprev:'0',TOnext:'0',},
{id:105,carNum:'м253хк790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:106,carNum:'а611тн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:107,carNum:'в168тн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:108,carNum:'а703то790',type:'С',odometer:'122767',driver:'Керимов Альви Исаевич',TOprev:'0',TOnext:'0',},
{id:109,carNum:'м242хк790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:110,carNum:'м230хк790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},
{id:111,carNum:'х806вр790',type:'М',odometer:'0',driver:'',TOprev:'0',TOnext:'0',},



		]);





		console.log('Seeding Finished');
	} catch (error) {
		console.error(error);
		throw new Error('Не получилось получить БД');
	}
};

main();
