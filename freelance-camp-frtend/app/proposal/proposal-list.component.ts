import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(12, 'Abc Company', 'http://portfolio.codyhiggins.com', 'Ruby on Rails', 150, 120, 15, 'codyhiggins@gmail.com')
	proposalTwo: Proposal = new Proposal(10, 'Xyz Company', 'http://portfolio.codyhiggins.com', 'Ruby on Rails', 150, 120, 15, 'codyhiggins@gmail.com')
	proposalThree: Proposal = new Proposal(19, 'Something Company', 'http://portfolio.codyhiggins.com', 'Ruby on Rails', 150, 120, 15, 'codyhiggins@gmail.com')

	proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}