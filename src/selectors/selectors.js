export const initialState = {
		items: [
		{
			id: "1",
			name: "aspirin",
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
			name: "banana",
			variants: [
				{
					name: "",
				},
			],
		},
		{
			id: "3",
			name: "orange",
			variants: [
				{
					name: "",
				},
			],
		},
		{
			id: "4",
			name: "grapefruit",
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
