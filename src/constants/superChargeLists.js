import blackList from '../assets/icons/icon-blacklist.svg';
import preview from '../assets/icons/icon-preview.svg';
import text from '../assets/icons/icon-text.svg';
import google from '../assets/img/logo-google.png';
import hp from '../assets/img/logo-hp.png';
import ibm from '../assets/img/logo-ibm.png';
import microsoft from '../assets/img/logo-microsoft.png';
import vectorGraphics from '../assets/img/logo-vector-graphics.png';

export const superChargeList = [
	{
		image: blackList,
		title: 'Create blacklists',
		description:
			'Ensure sensitive information never makes its way to your clipboard by excluding certain sources. ',
	},
	{
		image: text,
		title: 'Plain text snippets ',
		description:
			'Remove unwanted formatting from copied text for a consistent look.',
	},
	{
		image: preview,
		title: 'Sneak preview ',
		description:
			'Quick preview of all snippets on your Clipboard for easy access',
	},
];

export const superChargeBrands = [
	{
		image: google,
		altText: 'Google',
	},
	{
		image: ibm,
		altText: 'IBM',
	},
	{
		image: microsoft,
		altText: 'Microsoft',
	},
	{
		image: hp,
		altText: 'Hewlett Packard Enterprise',
	},
	{
		image: vectorGraphics,
		altText: 'Vector Graphics',
	},
];
