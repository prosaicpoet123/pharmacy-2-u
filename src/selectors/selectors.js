import { createSelector } from 'reselect'

const shopItemsSelector = state => state.shop.basket

const getSelected = createSelector(
	[shopItemsSelector],
	items => items.filter(item => item.selected === true)
)

export const subtotalSelector = createSelector(
	[getSelected],
	items => items.reduce((totalsum, item) => totalsum + item.price, 0).toFixed(2)
)

export const initialState = {
		items: [
		{
			id: "1",
			name: "asparaginase",
			variants: [
				{
					name: "asparaginase",
					description: "caplets 300mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "1",
					price: 4.99
				},
				{
					name: "asparaginase",
					description: "dispersible tablet 300mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "2",
					price: 4.99
				},
				{
					name: "asparaginase",
					description: "dispersible tablet 300mg + 200mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "3",
					price: 4.99
				},
				{
					name: "asparaginase",
					description: "dispersible tablet 75mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "4",
					price: 4.99
				},
				{
					name: "asparaginase",
					description: "ec tablets 75mg effervescent tablet",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "5",
					price: 4.99
				},
				{
					name: "asparaginase",
					description: "enteric coated tablets 300mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "6",
					price: 4.99
				},
				{
					name: "asparaginase",
					description: "enteric coated tablets 75mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "7",
					price: 4.99
				},
				{
					name: "asparaginase",
					description: "gastro-resistant tablets 300mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "8",
					price: 4.99
				},
				{
					name: "asparaginase",
					description: "powder",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "9",
					price: 4.99
				}
			],
		},
		{
			id: "2",
			name: "aspav",
			variants: [
				{
					name: "aspav",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "1",
					price: 4.99
				},
				{
					name: "aspav",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "2",
					price: 4.99
				},
				{
					name: "aspav",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "3",
					price: 4.99
				},
				{
					name: "aspav",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "4",
					price: 4.99
				},
				{
					name: "aspav",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "5",
					price: 4.99
				}
			],
		},
		{
			id: "3",
			name: "aspirin",
			variants: [
				{
					name: "aspirin",
					description: "caplets 300mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "1",
					price: 4.99
				},
				{
					name: "aspirin",
					description: "dispersible tablet 300mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "2",
					price: 4.99
				},
				{
					name: "aspirin",
					description: "dispersible tablet 300mg + 200mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "3",
					price: 4.99
				},
				{
					name: "aspirin",
					description: "dispersible tablet 75mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "4",
					price: 4.99
				},
				{
					name: "aspirin",
					description: "ec tablets 75mg effervescent tablet",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "5",
					price: 4.99
				},
				{
					name: "aspirin",
					description: "enteric coated tablets 300mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "6",
					price: 4.99
				},
				{
					name: "aspirin",
					description: "enteric coated tablets 75mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "7",
					price: 4.99
				},
				{
					name: "aspirin",
					description: "gastro-resistant tablets 300mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "8",
					price: 4.99
				},
				{
					name: "aspirin",
					description: "powder",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "9",
					price: 4.99
				}
			],
		},
		{
			id: "4",
			name: "aspro",
			variants: [
				{
					name: "aspro",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "1",
					price: 4.99
				},
				{
					name: "aspro",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "2",
					price: 4.99
				},
				{
					name: "aspro",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "3",
					price: 4.99
				},
				{
					name: "aspro",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "4",
					price: 4.99
				},
				{
					name: "aspro",
					description: "description of product",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "5",
					price: 4.99
				}
			],
		},
		{
			id: "5",
			name: "ibuprofen",
			variants: [
				{
					name: "Ibuprofen",
					description: "tablets 400mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "1",
					price: 4.99
				},
				{
					name: "Ibuprofen",
					description: "tablets 200mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "2",
					price: 4.99
				},
				{
					name: "Ibuprofen",
					description: "10% pain relief gel",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "3",
					price: 4.99
				},
				{
					name: "Ibuprofen",
					description: "liquid caps 400mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "4",
					price: 4.99
				},
				{
					name: "Ibuprofen",
					description: "liquid caps 200mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "5",
					price: 4.99
				}
			],
		},
		{
			id: "5",
			name: "paracetamol",
			variants: [
				{
					name: "Paracetamol",
					description: "tablets 500mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "1",
					price: 4.99
				},
				{
					name: "Paracetamol",
					description: "capsules 500mg",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "2",
					price: 4.99
				},
				{
					name: "Paracetamol",
					description: "soluble tablets",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "3",
					price: 4.99
				},
				{
					name: "Paracetamol",
					description: "liquid",
					dosageDetails: "We will get this from your GP",
					lastDispensed: "None",
					id: "4",
					price: 4.99
				}
			],
		}
	],

	basket: []

}
