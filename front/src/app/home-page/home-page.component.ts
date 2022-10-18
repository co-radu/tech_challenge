import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Argonaute } from '../class/argonaute';
import { ArgonauteService } from '../services/argonaute.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['../../styles.css']
})

export class HomePageComponent implements OnInit {
	
	public argonauteList : Argonaute[] = [];
	createArgonauteValue: string;

	argonauteForm = new FormGroup({
		name: new FormControl(''),
		}
	);
	
	constructor(
		private argonauteService: ArgonauteService,
	) { }
		
	ngOnInit(): void {
		this.getArgonautes();
	}

	firsLetterCapitalize(string: string): string {
		return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
	}

	getArgonautes(): void {
		this.argonauteService.getArgonautes().subscribe(
			(argonauteList: Argonaute[]) => {
				this.argonauteList = argonauteList;
			}
		);
	}
				
	createArgonaute(): void {
		let newArgoName: string = this.argonauteForm.value.name!;
		let newArgonaute: Argonaute = {
			name: this.firsLetterCapitalize(newArgoName),
		};
		this.argonauteService.createArgonaute(newArgonaute).subscribe(
			(createdArgonaute: Argonaute) => {
				this.argonauteList.push(createdArgonaute);
				this.argonauteForm.reset();
			}
		);
	}
}
				