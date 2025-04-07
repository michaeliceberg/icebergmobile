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




			

			{id:1,carNum:'а546мк750',type:'Т',odometer:'489492',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},




{id:6,carNum:'с285вн790',type:'C',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:7,carNum:'м473ау790',type:'М',odometer:'26268',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:8,carNum:'м549ау790',type:'М',odometer:'49600',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},

{id:10,carNum:'м609ау790',type:'С',odometer:'163481',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:11,carNum:'у003вк790',type:'М',odometer:'56500',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:12,carNum:'м608ау790',type:'С',odometer:'186943',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},



{id:16,carNum:'м584ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},



{id:20,carNum:'с278вн790',type:'C',odometer:'203849',driver:'Балумов Рамис Микдадович',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:21,carNum:'м507ау790',type:'С',odometer:'201177',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},


{id:24,carNum:'с204вн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:25,carNum:'м412ау790',type:'М',odometer:'39975',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:26,carNum:'с301вн790',type:'С',odometer:'225414',driver:'Хушпаров Усман Виситович',TOprev:'0',TOnext:'0',model:'KAMAZ',},

{id:28,carNum:'с264вн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},

{id:30,carNum:'с306вн790',type:'С',odometer:'182841',driver:'Майрабеков Алхазур Лечиевич',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:31,carNum:'м600ау790',type:'С',odometer:'181142',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:32,carNum:'с308вн790',type:'С',odometer:'252618',driver:'Сайтхажиев Турпал-Али Саламуевич',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:33,carNum:'м606ау790',type:'С',odometer:'203997',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:34,carNum:'с238вн790',type:'С',odometer:'212828',driver:'Карибов Физиули Насраддин Оглы',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:35,carNum:'с296вн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:36,carNum:'м509ау790',type:'М',odometer:'34048',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:37,carNum:'м538ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:38,carNum:'м615ау790',type:'С',odometer:'209330',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:39,carNum:'м592ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:40,carNum:'м558ау790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},

{id:42,carNum:'а544мк750',type:'Т',odometer:'844750',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},

{id:44,carNum:'у573ку750',type:'М',odometer:'349419',driver:'',TOprev:'0',TOnext:'0',model:'MAN',},
{id:45,carNum:'а540мк750',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},


{id:48,carNum:'е687ас790',type:'М',odometer:'47137',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},


{id:51,carNum:'т782вм790',type:'М',odometer:'36443',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:52,carNum:'е438ас790',type:'М',odometer:'36503',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:53,carNum:'а562мк750',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:54,carNum:'а545мк750',type:'Т',odometer:'457492',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},

{id:56,carNum:'р279ке750',type:'М',odometer:'264638',driver:'Мухтаров Ахмед Селимсолтаевич ',TOprev:'0',TOnext:'0',model:'MAN',},
{id:57,carNum:'р280ке750',type:'М',odometer:'307282',driver:'',TOprev:'0',TOnext:'0',model:'MAN',},
{id:58,carNum:'р281ке750',type:'М',odometer:'193979',driver:'',TOprev:'0',TOnext:'0',model:'MAN',},
{id:59,carNum:'р284ке750',type:'М',odometer:'311688',driver:'',TOprev:'0',TOnext:'0',model:'MAN',},
{id:60,carNum:'х169ео790',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:61,carNum:'р283ке750',type:'М',odometer:'321092',driver:'',TOprev:'0',TOnext:'0',model:'MAN',},
{id:62,carNum:'н026ха790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'GRUNWALD',},
{id:63,carNum:'а559мк750',type:'Т',odometer:'481904',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:64,carNum:'с172хн790',type:'С',odometer:'131962',driver:'Чупилов Андрей Юрьевич',TOprev:'0',TOnext:'0',model:'GRUNWALD',},
{id:65,carNum:'н445хк790',type:'С',odometer:'112310',driver:'',TOprev:'0',TOnext:'0',model:'GRUNWALD',},
{id:66,carNum:'н419хк790',type:'С',odometer:'108428',driver:'',TOprev:'0',TOnext:'0',model:'GRUNWALD',},
{id:67,carNum:'н439хк790',type:'C',odometer:'143195',driver:'',TOprev:'0',TOnext:'0',model:'GRUNWALD',},
{id:68,carNum:'н456хк790',type:'C',odometer:'109622',driver:'',TOprev:'0',TOnext:'0',model:'GRUNWALD',},
{id:69,carNum:'в751вс790',type:'С',odometer:'253084',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:70,carNum:'х520ау790',type:'С',odometer:'374700',driver:'Фаградян Манвел Варичович',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:71,carNum:'в864вс790',type:'С',odometer:'264382',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:72,carNum:'м410вт790',type:'Т',odometer:'420670',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:73,carNum:'в736вс790',type:'С',odometer:'300580',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:74,carNum:'т002ах790',type:'С',odometer:'252951',driver:'Мухтаров Ахмед Селимсолтаевич ',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:75,carNum:'в717вс790',type:'С',odometer:'249632',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:76,carNum:'м411вт790',type:'Т',odometer:'426531',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:77,carNum:'х580ау790',type:'С',odometer:'282056',driver:'Дахаев Абу Саидмухаметович',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:78,carNum:'е353кт790',type:'Т',odometer:'328330',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:79,carNum:'в793вс790',type:'С',odometer:'318483',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:80,carNum:'м427вт790',type:'С',odometer:'291091',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:81,carNum:'в818вс790',type:'С',odometer:'371211',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:82,carNum:'в747вс790',type:'С',odometer:'256468',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:83,carNum:'м448вт790',type:'С',odometer:'273534',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:84,carNum:'х500ау790',type:'С',odometer:'316738',driver:'Мухтаров Ахмед Селимсолтаевич ',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:85,carNum:'м414вт790',type:'Т',odometer:'364847',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:86,carNum:'х517ау790',type:'С',odometer:'263309',driver:'Мухтаров Ахмед Селимсолтаевич',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:87,carNum:'м335вт790',type:'Т',odometer:'471129',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:88,carNum:'в821вс790',type:'С',odometer:'226491',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:89,carNum:'в865вс790',type:'С',odometer:'243759',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:90,carNum:'в727вс790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:91,carNum:'с054хм790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:92,carNum:'м419вт790',type:'Т',odometer:'370286',driver:'',TOprev:'0',TOnext:'0',model:'SCANIA',},
{id:93,carNum:'е274хх790',type:'Т',odometer:'134015',driver:'',TOprev:'0',TOnext:'0',model:'SITRAK',},
{id:94,carNum:'к118ру790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:95,carNum:'у273тн790',type:'Т',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'SITRAK',},
{id:96,carNum:'в160тн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:97,carNum:'х831вр790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:98,carNum:'м233хк790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:99,carNum:'у267тн790',type:'Т',odometer:'158724',driver:'Бибулатов Расул Геланиевич',TOprev:'0',TOnext:'0',model:'SITRAK',},
{id:100,carNum:'х781вр790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:101,carNum:'к104ру790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:102,carNum:'х804вр790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:103,carNum:'к093ру790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:104,carNum:'у233тн790',type:'Т',odometer:'152034',driver:'Ярыгин Виктор Михайлович',TOprev:'0',TOnext:'0',model:'SITRAK',},
{id:105,carNum:'м253хк790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:106,carNum:'а611тн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:107,carNum:'в168тн790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:108,carNum:'а703то790',type:'Т',odometer:'123705',driver:'',TOprev:'0',TOnext:'0',model:'SITRAK',},

{id:110,carNum:'м230хк790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},
{id:111,carNum:'х806вр790',type:'С',odometer:'0',driver:'',TOprev:'0',TOnext:'0',model:'KAMAZ',},











		]);





		console.log('Seeding Finished');
	} catch (error) {
		console.error(error);
		throw new Error('Не получилось получить БД');
	}
};

main();
