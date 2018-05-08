import {Skills} from './Skills';
import {Experience} from './Experience';
import {Language} from './Language';
import {Hobbie} from './Hobbie';
import {Reference} from './Reference';
import {Document} from './Document';
import {Education} from './Education';

export class Person{
	id:number;
	name:string;
	surname:string;
	function_fr:string;
	function_en:string;
	resume_fr:string;
	resume_en:string;
	image:string;
	experience:Experience[];
	skills:Skills[];
	language:Language[];
	hobbie:Hobbie[];
	reference:Reference[];
	document:Document[];
	education:Education[];

}