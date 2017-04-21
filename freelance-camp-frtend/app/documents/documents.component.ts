import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
	pageTitle: string = 'Document Dashboard'
	documents: Document[] = [
		{ 
			title: "First Doc",
			description: "Money to be made",
			file_url: 'http://google.com',
			updated_at: '4/16/2017',
			image_url: 'http://youngtopublishing.com/wp-content/uploads/2017/02/Freelancer-Fair-couple.jpg'
		},
		{ 
			title: "Second Doc",
			description: "Money to be made",
			file_url: 'http://google.com',
			updated_at: '4/16/2017',
			image_url: 'http://youngtopublishing.com/wp-content/uploads/2017/02/Freelancer-Fair-couple.jpg'
		},
		{ 
			title: "Third Doc",
			description: "Money to be made",
			file_url: 'http://google.com',
			updated_at: '4/16/2017',
			image_url: 'http://youngtopublishing.com/wp-content/uploads/2017/02/Freelancer-Fair-couple.jpg'
		}
	]
}