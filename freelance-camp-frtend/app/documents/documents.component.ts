import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
	pageTitle: string = 'Document Dashboard'
	documents: Document[] = [
		{ 
			title: "First Doc",
			description: "Money to be made",
			file_url: 'http://google.com',
			updated_at: '4/16/2017',
			image_url: 'http://google.com'
		},
		{ 
			title: "Second Doc",
			description: "Money to be made",
			file_url: 'http://google.com',
			updated_at: '4/16/2017',
			image_url: 'http://google.com'
		},
		{ 
			title: "Third Doc",
			description: "Money to be made",
			file_url: 'http://google.com',
			updated_at: '4/16/2017',
			image_url: 'http://google.com'
		}
	]
}