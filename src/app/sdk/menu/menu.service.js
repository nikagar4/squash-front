import menuItems from "./menu.const";

export const menuService = {

	get: () => {
		// this should use http client
		return new Promise((resolve, reject) => {
			
			let items = menuItems.map((item) => {
				return {
					key: item.key,
					link: item.link,
					name: item.name
				}
			});
			resolve(items);
		});
	}

}