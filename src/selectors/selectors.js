export const initialState = {
		items: [
		{
			id: "1",
			name: "asparaginase",
			variants: [
				{
					name: "",
				},
				{
					name: "",
				},
				{
					name: "",
				},
				{
					name: "",
				},
				{
					name: "",
				}
			],
		},
		{
			id: "2",
			name: "aspav",
			variants: [
				{
					name: "",
				},
			],
		},
		{
			id: "3",
			name: "aspirin",
			variants: [
				{
					name: "",
				},
			],
		},
		{
			id: "4",
			name: "aspro",
			variants: [
				{
					name: "",
				},
			],
		},
		{
			id: "5",
			name: "Product 5",
			variants: [
				{
					name: "",
				},
			],
		},
	],

	basket: []

}

export const shopItemsSelector = state => state.shop.items
